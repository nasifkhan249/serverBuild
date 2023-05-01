const http = require('http');
const fs = require('fs');
const host = 3000;

const server = http.createServer(function (req,res) {
    if(req.url === '/'){
        fs.readFile('./public/home.html','utf-8',function (error,data) {
           if(error){
               res.writeHead(200,{'content-type':'text/html'});
               res.write('404 not Found');
               res.end();
           }else{
               res.writeHead(200,{'content-type':'text/html'});
               res.write(data);
               res.end();
           }
        });

    }else if(req.url === '/about'){
        fs.readFile('./public/about.html','utf-8',function (error,data) {
           if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write('404 not found');
                res.end();
           }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
                res.end();
           }            
        });
    }else if(req.url === '/contact'){
        fs.readFile('./public/contact.html','utf-8',function(error,data){
            if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write('404 not found');
                res.end();
            }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }else if(req.url === '/style.css'){
        fs.readFile('style.css','utf-8',function (error,data) {
            if(error){
                res.writeHead(404,{'content-type':'text/css'});
                res.write('not add css');
                res.end();
            }else{
                res.writeHead(200,{'content-type':'text/css'});
                res.write(data);
                res.end();
            }
        })
    }else{
        res.writeHead(404);
        res.write('404 page not found');
        res.end();
    }
});

server.listen(host,function () {
    console.log(`Server run in ${host}`);
});