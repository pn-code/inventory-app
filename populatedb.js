#! /usr/bin/env node
require("dotenv").config();
console.log("This script populates our db with information");

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
var async = require("async");

const Item = require("./src/models/item");
const mongoDB = process.env.MONGO_URL;

var mongoose = require("mongoose");
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const items = [];

function itemCreate(name, desc, category, price, number_in_stock, cb) {
    const itemDetail = {
        name,
        desc,
        category,
        price,
        number_in_stock,
    };

    const item = new Item(itemDetail);

    item.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New item: " + item);
        items.push(item);
        cb(null, item);
    });
}

function createItems(cb) {
    async.series(
        [
            function (callback) {
                itemCreate(
                    "Orange",
                    "An orange fruit is orange",
                    "fruit",
                    "$2",
                    52,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Lemon",
                    "Life is no lemon",
                    "fruit",
                    "$5",
                    20,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Pink Guava",
                    "Guava grows on trees",
                    "fruit",
                    "$12",
                    2,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Apples",
                    "The basic fruit",
                    "fruit",
                    "$1",
                    63,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Tangerines",
                    "The other orange fruit",
                    "fruit",
                    "$1",
                    32,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Limes",
                    "The bitter lemon",
                    "fruit",
                    "$1",
                    21,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Carrot",
                    "An orange root veggie",
                    "vegetable",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Brocolli",
                    "A common cruciferous veggie",
                    "vegetable",
                    "$1",
                    1000,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Beet",
                    "This veggie gets beet by its parents",
                    "vegetable",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Garlic",
                    "The most potent veggie",
                    "vegetable",
                    "$1",
                    100,
                    callback
                );
            },
            function (callback) {
                itemCreate(
                    "Green Peas",
                    "This veggie is pea green",
                    "vegetable",
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
    [createItems],
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
