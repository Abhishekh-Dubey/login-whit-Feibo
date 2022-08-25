
user="Abhi"
pass="123"
reg={}

var regst={}


function submitReg(){
    firstName=document.getElementById('Reg_FirstName').value;
    lastName=document.getElementById('Reg_LastName').value;
    userName=document.getElementById('Reg_userName').value;
    password=document.getElementById('Reg_password').value;
    re_pass=document.getElementById('Reg_re_pass').value;
    email=document.getElementById('Reg_email').value;
    if (password==re_pass){
        
        reg.userName=userName
        reg.password=password
        reg.re_pass=re_pass
        reg.email=email
    }
    else{
        alert("passwaord dosn't match")
    }
    // console.log(userName);
    // console.log(password);
    // console.log(re_pass);
    // console.log(email);
    // console.log(reg);
    var x= JSON.stringify(reg);
    localStorage.setItem('test',x);
    

}
    var y = localStorage.getItem("test");
    var regstration = JSON.parse(y);
    // document.getElementById('demo').innerHTML=regstration.userName
    let usr=regstration.userName
    let pas=regstration.password
    regst.usr=usr
    regst.pas=pas
    console.log(regst.usr);
   
function submit(){
    
    userName=document.getElementById('userName').value;
    password=document.getElementById('password').value;
    console.log(userName);
    console.log(password);
    if(userName===regst.usr && password===regst.pas){  
        // if (user===userName && password===pass){
            
            window.location.assign("http://127.0.0.1:5500/login_and_fibonacci/login-whit-Feibo/cal.html");
            alert("login successfully")
            console.log("login successfully");
        }
        else if(user===userName && password===pass){
            window.location.assign("http://127.0.0.1:5500/login_and_fibonacci/login-whit-Feibo/cal.html");
            alert("login successfully")
            console.log("login successfully");
        }
        else{
            alert("Invalid UserName or Password ")
            console.log("Invalid UserName or Password ");
        }
    // }
}

const fibArr=[0,1]
function myFunction(){
    
    fNum=parseInt(document.getElementById('fNum').value);
    sNum=parseInt(document.getElementById('sNum').value);
    
    console.log(fNum);
    console.log(sNum);
    
    // document.getElementById("demo1").innerHTML = fNum;  
    // document.getElementById("demo2").innerHTML = sNum;  
    
    // f1Num=10;
    // console.log(fNum);
    
    
    for(var i=2; i<fNum*11;i++){
        fibArr.push(fibArr[i-2]+fibArr[i-1])
    }
    h=[]
    finalArr1=[]
    for(var j= 0; j<fibArr.length; j++){
            if(fNum<fibArr[j]){
                h.push(fibArr[j])
                
            }
    }
    for(var i= 0; i<10;i++){
        finalArr1.push(h[i]);
    }
    console.log(finalArr1);
//////////////////////////////////////////
    h2=[]
    finalArr2=[]
    for(var j= 0; j<fibArr.length; j++){
            if(sNum<fibArr[j]){
                h2.push(fibArr[j])
                
            }
    }
    for(var i= 0; i<10;i++){
        finalArr2.push(h2[i]);
    }
    console.log(finalArr2);




    document.getElementById("resultfibo1").innerHTML = finalArr1;  
    document.getElementById("resultfibo2").innerHTML = finalArr2;  
    

}

