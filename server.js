/*-----http module--------

var http=require('http');
http.createServer((req,res)=>{
    res.write('working on http module..');
    res.end();
    console.log('srever is running...')
}).listen(3152)

*/


/*
//-------FileSystem module--------

  //   to read file from file to browser

var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('abc.txt',(err,data)=>{

    res.write(data);
    res.end();
})
    console.log('srever is running...')
}).listen(3152)
*/


/*
//-------adding thext to the file------

var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.appendFile('abc.txt','appended the something....',(err,data)=>{

    res.write(data);
    res.end();
})
    console.log('srever is running...')
}).listen(3152)
*/


/*
//overriding the text in the file
var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.writeFile('abc.txt','text was changed by using writeFile()',(err,data)=>{

    res.write(data);
    res.end();
})
    console.log('srever is running...')
}).listen(3152)
*/

/*
//deleting the file
var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.writeFile('abc.txt',(err)=>{

   if (err) throw err;
   console.log('file deleted')
})
   
}).listen(3152)
*/
