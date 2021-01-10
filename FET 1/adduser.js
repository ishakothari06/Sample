$(document).ready(function(){
    console.log(isUserExist("kp@cybage.com"));
    $("#submit").on("click", function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var mob = $("#phone").val();
        var password = $("#password").val();

        var data = {
            "name": name,
            "email": email,
            "password":password,
            "mobile": mob,
        }

        console.log(data);
        

        $.ajax({
            url:"http://localhost:3000/user/",
            method:"POST",
            data: data,
            success:(x)=>{
                console.log("Success");
                console.log(x);
            },
            error:(x)=>{
                console.log("Error");
                console.log(x);
            }
        })

    }); 
    
});


function isUserExist(email){
    let flag = 0;
    $.ajax({
        url:"http://localhost:3000/user?email="+email,
        method:"GET",
        success:(x)=>{
            if(x.length > 0){
                flag = 1;
            }else{
                flag = 0;
            }
        },
        error:(x)=>{
            console.log("Error");
        }
    })
    if(flag == 1){
        return true;
    }else{
        return false;
    }
}


function registerUser(){

}

