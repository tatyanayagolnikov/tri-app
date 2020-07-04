
const http = require('http');

const server = http.createServer((req, res) => { 
    if (req.url === '/') {
        res.write('Hello Buns');
        res.end(); 
    }  

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
    
    if (!server) res.status(404).send("object not found");
    res.end();
});

server.listen(3000); 

console.log('Listening on port 3000..');  
