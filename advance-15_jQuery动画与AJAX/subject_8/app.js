var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer(function(req,res){

	var pathObj = url.parse(req.url,true);
	// console.log(pathObj)
	// console.log(pathObj.pathname)
	switch(pathObj.pathname){
		case '/loadMore':
			var curIndex = pathObj.query.idx
			// console.log(curIndex)
			var len = pathObj.query.len
			// console.log(len)
			var data = []
			for (var i=0; i<len; i++){
				data.push('内容' + (parseInt(curIndex) + i))
			}
			// console.log(data)
			// console.log(JSON.stringify(data))
			res.end(JSON.stringify(data))
			// res.end('ok')
			break;

		default:
		    // console.log('ok');
			fs.readFile(path.join(__dirname,pathObj.pathname),function(err,data){
				// console.log(data);
				if(err){
					res.statusCode = 404
					res.end('NOT FOUND')
				}
				else{
					res.end(data)
				}
			})
	}



}).listen(8081)