nodemailer = require('nodemailer');


    // transporter = nodemailer.createTransport({
      
    //     host :'smtp.gmail.com',
    //     port: 465,
    //     secure:'true',
    //     auth: {
    //         user: 'arshadad742@gmail.com',
    //         pass :'yuxd fphe vzaf obeg'
    //     }
    // })


//mail object
mail = {
    from:'arshadad742@gmail.com',
    to:'mdabduls2511@gmail.com',
    subject: 'OTP',
    text:'Your OTP is signing is value' 
    

}

// send mail
transporter.sendMail(mail, (err, data) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(data)
    }
})


