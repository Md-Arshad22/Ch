otpgen = require('otp-generator');
express = require('express');
port = 3000;
app = express();


app.listen(port, () => {
    console.log('Listening on port ${port}')
})

genotp = () => {
    OTP = otpgen.generate(6);
    console.log(OTP)
    return OTP;
}

genotp(6)
// OTP = otpgen.generate(6, {digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars:false });
// console.log(OTP)

app.get('/',(req,res) => { 
genotp()})

// app.get('/',(req,res) => { 
//     res.send(genotp())
//     genotp()})


// app.get('/',(req,res) => {
//     res.send('index')
// })

