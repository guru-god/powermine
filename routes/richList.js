var express = require('express');
var router = express.Router();
var RichListModel = require("../models/richlist");

router.get('/per', function(req, res, next) {
    var data = req.body;

    RichListModel.findOne(
        {name: "per"},
        function (err, richList) { // callback
            if (err) {
                console.log(err)
                res.json({status: 'error'})
            } else {
                // handle document
                res.json({richList: richList.richList})
            }
        }
    );
});

router.get('/iost', function(req, res, next) {
    var data = req.body;

    RichListModel.findOne(
        {name: "iost"},
        function (err, richList) { // callback
            if (err) {
                console.log(err)
                res.json({status: 'error'})
            } else {
                // handle document
                res.json({richList: richList.richList})
            }
        }
    );
});

router.get('/compound', function(req, res, next) {
    var data = req.body;

    RichListModel.findOne(
        {name: "compound"},
        function (err, richList) { // callback
            if (err) {
                console.log(err)
                res.json({status: 'error'})
            } else {
                // handle document
                res.json({richList: richList.richList})
            }
        }
    );
});

router.get('/volatile', function(req, res, next) {
    var data = req.body;

    RichListModel.findOne(
        {name: "volatile"},
        function (err, richList) { // callback
            if (err) {
                console.log(err)
                res.json({status: 'error'})
            } else {
                // handle document
                res.json({richList: richList.richList})
            }
        }
    );
});

module.exports = router;
