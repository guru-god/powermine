var express = require('express');
var router = express.Router();
var ContentModel = require('../models/content');

/* GET home page. */
router.get('/', function(req, res, next) {
  ContentModel.findOne({name: 'bankRollAsset'}, function(err, contentIns) {
    var content = '';
    if(err) {
      console.log(err)
      // res.json({status: 'error'})
      content = '';
    } else if(contentIns) {
      console.log(contentIns)
      // res.json({status: 'success', content: content})
      content = contentIns;
    }
    res.render('index', {content: contentIns});
  })

});

/* GET home page. */
router.get('/powermine-whitepaper/', function(req, res, next) {
  res.render('whitepaper');
});

router.get('/powermine-admin/', function(req, res, next) {
  ContentModel.findOne({name: 'bankRollAsset'}, function(err, contentIns) {
    var content = '';
    if(err) {
      console.log(err)
      // res.json({status: 'error'})
      content = '';
    } else if(contentIns) {
      console.log(contentIns)
      // res.json({status: 'success', content: content})
      content = contentIns;
    }
    res.render('admin', {content: contentIns});
  })
});

router.get('/imatch/', function(req, res, next) {
  ContentModel.findOne({name: 'bankRollAsset'}, function(err, contentIns) {
    var content = '';
    if(err) {
      console.log(err)
      // res.json({status: 'error'})
      content = '';
    } else if(contentIns) {
      console.log(contentIns)
      // res.json({status: 'success', content: content})
      content = contentIns;
    }
    res.render('imatch', {content: contentIns});
  })
});


module.exports = router;
