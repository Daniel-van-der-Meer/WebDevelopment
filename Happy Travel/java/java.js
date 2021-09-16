function sendMail(params) {
    var tempparams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").msg,

    };

    emailjs.send('gmail' ,'template_smoyvdv' ,tempParams)
    .then(function(res){
        console.log("succes", res.status);

        })
    }
