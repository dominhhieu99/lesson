var http = require('http');
var fs= require('fs');
http.createServer(function(req,res){

    switch(req.url){
        case '/':

        res.writeHead(200,{'Content-Typt': 'text/html'});
        var content = fs.readFileSync('./data.txt', 'utf8');
        

            // fs.readFile('./data.txt','utf8',function(err, content){
            //     res.writeHead(200,{'Content-Typt': 'text/html'});
            //     if(err){
            //         res.end('<h2>khong doc duoc du lieu tu file da tao</h2>');
            //     }
            // });

        res.end(content);
        break;
        case '/ghifile':
            // doc noi dung file data.txt
            var content = fs.readFileSync('./data.txt', 'utf8');
            // ghi noi dung vu lay 
            fs.writeFileSync('./ouput1.txt',content);
            res.writeHead(200,{'Content-Typt': 'text/html'});
            res.end('Done!');
            break;    

        case '/fpt-poly':
            res.writeHead(200,{'Content-Typt': 'text/html'});
            res.end('<h2>Trang thong tin truong hoc</h2>');
            break;
        default:
            res.writeHead(200,{'Content-Typt': 'text/html'});
            res.end('<h2>Duong dan khong ton tai</h2>');
            break;
    }

}).listen(3000);
// var http = require('http');
// var fs= require('fs');
// http.createServer(function(req,res){

//     switch(req.url){
//         case '/':
//         res.writeHead(200,{'Content-Typt': 'text/html'});
//         var content = fs.readFileSync('./data.txt','utf8');
//         res.end(content);
//             break;
//         case '/fpt-poly':
//             res.writeHead(200,{'Content-Typt': 'text/html'});
//             res.end('<h2>Trang thong tin truong hoc</h2>');
//             break;
//         default:
//             res.writeHead(200,{'Content-Typt': 'text/html'});
//             res.end('<h2>Duong dan khong ton tai</h2>');
//             break;
//     }

// }).listen(3000);