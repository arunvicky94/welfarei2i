/**
 * Module dependencies.
 */
var Fund = require('../models/fund');
var passport = require('passport');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');

exports.requestFund = function (req, res) {
    var fund = new Fund(req.body.fund);
    fund.user = req.body.user;
    fund.date = new Date();
    fund.status = "pending";

    Fund.find({
        user: fund.user
    }, function (err, funds) {
        if (err) {
            console.log("error");
        }
        console.log("----------test controller---------------");
        if (funds.length != 0) {
            console.log(funds[funds.length - 1]);
            var lastFund = funds[funds.length - 1];
            var lastMonth = lastFund.date.getMonth();
            console.log("----------lastmonth---------------", lastMonth);
            var currentMonth = new Date().getMonth();
            console.log("----------currentMonth---------------", currentMonth);
        }

        if (lastMonth >= (currentMonth - 1)) {
            console.log("You are not elligible for request fund");
            return res.status(404).json({
                message: "You are not elligible for request fund"
            });
        } else {
            fund.save(function (err, fund) {
                console.log("server controller calling");
                if (err) {
                    console.log("error while adding");
                    return res.json(400, err);
                }
                return res.json(fund).status(200);
            });
        }
    })
};

exports.updateFund = function (req, res) {
    console.log(req.body);
    Fund.update({
            _id: req.body._id
        }, {
            $set: {
                status: req.body.status
            }
        },
        function (err, funds) {
            console.log("server controller calling");
            if (err) {
                console.log("error while adding");
                return res.json(400, err);
            }
            //  return res.json(funds).status(200);
            exports.getFunds(req, res);
        })
};

exports.getFundByUserId = function (req, res, next, id) {
    console.log("-----------get function calling----------");
    console.log("-----------get function id----------", id);
    Fund.find({
        "user": id
    }, function (err, funds) {
        if (err) {
            return res.status(500).json({
                error: 'Error while fetching funds'
            });
        }
        console.log(funds);
        return res.status(200).json(funds);

    })
};

exports.getFunds = function (req, res) {
    console.log("-----------get function calling----------");
    console.log("-----------get function id----------");
    Fund.find({}, function (err, funds) {
        if (err) {
            return res.status(500).json({
                error: 'Error while fetching funds'
            });
        }
        console.log(funds);
        return res.status(200).json(funds);
    })
};
