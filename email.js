var http=require('http')
var uc=require('upper-case');
http.createServer((req,res)=>{
    res.write(uc.uppercase('abc.txt'));
    res.end();
}).listen(3153)

/*-------node js mail-------
var uc=require('nodemailer');
var transporter= nodemailer.createTransport({
service:'gmail',
auth:{
    user:'ajayuv21@gmail.com'
    pass:'*********'      //fake password
}

})
var option={
    from:'ajayuv21@gmail.com',
    to:'some@gmail.com',
    subject:"testing mail",
    text:'sending mail'
}
transporter.sendMail(option,(err,info)=>{
    if(err){
        console.log(error);}
        else{
            console.log("email sent succsefully"+info.response)

        }
})
*/