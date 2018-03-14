function signin(req, res){
    
    res.render('signin');
}
    
function signinProcess(req, res){
    let process = require('../utilities/index.js');
    process.verifUser(req,res);
}

module.exports.signin = signin;
module.exports.signinProcess = signinProcess;





//     // res.send('About');
//     let username = req.body.username;
//     let password = req.body.password;
//     let newpassword = req.body.newpassword;
//     let newusername = req.body.newusername;
    
//     if(newusername == "" || newpassword == "") {
//         if(username !== "mph" || password !== "mph"){
//             res.redirect("signup");
//         }

//     res.render('signin');
//     }
    
//     if (req.body.verif == 1){
//         if(newusername == "" || newpassword == "") {
//             res.redirect('signup');
//         }

//         res.render("signin")

//     }
    
//     // res.send('Bienvenue sur votre compte');
// }



// module.exports.signin = signin;

