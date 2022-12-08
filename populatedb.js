#! /usr/bin/env node
require('dotenv').config()
console.log("This script populates our db with information");

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
var async = require("async");

const Fruit = require("./src/models/fruit");
const Veggie = require("./src/models/veggie");
const mongoDB = process.env.MONGO_URL;

var mongoose = require("mongoose");
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const veggies = [];
const fruits = [];

function fruitCreate(name, desc, price, number_in_stock, cb) {
    const fruitDetail = {
        name,
        desc,
        category: "fruit",
        price,
        number_in_stock,
    };

    const fruit = new Fruit(fruitDetail);

    fruit.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New Fruit: " + fruit);
        fruits.push(fruit);
        cb(null, fruit);
    });
}

function veggieCreate(name, desc, price, number_in_stock, cb) {
    const veggieDetail = {
        name,
        desc,
        category: "vegetable",
        price,
        number_in_stock,
    };

    const veggie = new Veggie(veggieDetail);

    veggie.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New Veggie: " + veggie);
        veggies.push(veggie);
        cb(null, veggie);
    });
}

function createFruits(cb) {
    async.series(
        [
            function (callback) {
                fruitCreate(
                    "Orange",
                    "An orange fruit is orange",
                    "$2",
                    52,
                    callback
                );
            },
            function (callback) {
                fruitCreate("Lemon", "Life is no lemon", "$5", 20, callback);
            },
            function (callback) {
                fruitCreate(
                    "Pink Guava",
                    "Guava grows on trees",
                    "$12",
                    2,
                    callback
                );
            },
            function (callback) {
                fruitCreate("Apples", "The basic fruit", "$1", 63, callback);
            },
            function (callback) {
                fruitCreate(
                    "Tangerines",
                    "The other orange fruit",
                    "$1",
                    32,
                    callback
                );
            },
            function (callback) {
                fruitCreate("Limes", "The bitter lemon", "$1", 21, callback);
            },
        ],
        // optional callback
        cb
    );
}

function createVeggies(cb) {
    async.parallel(
        [
            function (callback) {
                veggieCreate(
                    "Carrot",
                    "An orange root veggie",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                veggieCreate(
                    "Brocolli",
                    "A common cruciferous veggie",
                    "$1",
                    1000,
                    callback
                );
            },
            function (callback) {
                veggieCreate(
                    "Beet",
                    "This veggie gets beet by its parents",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                veggieCreate(
                    "Garlic",
                    "The most potent veggie",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                veggieCreate(
                    "Green Peas",
                    "This veggie is pea green",
                    "$1",
                    100,
                    callback
                );
            },
        ],
        // optional callback
        cb
    );
}

async.series(
    [createFruits, createVeggies],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log("FINAL ERR: " + err);
        } else {
            console.log("There is an error.");
        }
        // All done, disconnect from database
        mongoose.connection.close();
    }
);
