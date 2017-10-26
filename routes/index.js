var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	console.log(req.body.name,req.body.content);
	
	fs.readFile('public/index.txt','utf-8',function(err,data){
		fs.writeFile('public/index.txt',req.body.name+req.body.content,function(err){
			var data = req.body.name;
			var dete = req.body.content;
			res.send({name:data,content:dete})
		})
	})
});
module.exports = router;
