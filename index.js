
user="Abhi"
pass="123"
function submit(){
    userName=document.getElementById('userName').value;
    password=document.getElementById('password').value;
    console.log(userName);
    console.log(password);
    if (user===userName && password===pass){
        
        window.location.assign("http://127.0.0.1:5500/login_and_fibonacci/login-whit-Feibo/cal.html");
        alert("login successfully")
        console.log("login successfully");
    }
    else{
        alert("Invalid UserName or Password ")
        console.log("Invalid UserName or Password ");
    }
}


function myFunction(){
    fNum=parseInt(document.getElementById('fNum').value);
    sNum=parseInt(document.getElementById('sNum').value);
    console.log(fNum);
    console.log(sNum);
    result=fNum+sNum
    document.getElementById("demo1").innerHTML = fNum;  
    document.getElementById("demo2").innerHTML = sNum;  
    
    document.getElementById("result").innerHTML = result;  

}

function fibonacci(){
    fNum=parseInt(document.getElementById('fibo').value);
    console.log(fNum);
    
    const fibArr=[0,1]
    for(var i=2; i<=fNum;i++){
        fibArr.push(fibArr[i-2]+fibArr[i-1])
    }
    document.getElementById("resultfibo").innerHTML = fibArr;  

    console.log(fibArr);
}