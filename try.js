const fibArr1=[0,1]
const fibArr=[0,1]
function myFunction(){
    
    fNum=3
    sNum=6
    fibArr1[0]=fNum
    fibArr1[1]=sNum
    console.log(fNum);
    console.log(sNum);
    
    // document.getElementById("demo1").innerHTML = fNum;  
    // document.getElementById("demo2").innerHTML = sNum;  
    
    // f1Num=10;
    // console.log(fNum);
    
    for(var i=2; i<10;i++){
        fibArr1.push(fibArr1[i-2]+fibArr1[i-1])
    }
    
    console.log(fibArr1);



    for(var l=2; l<fNum*11;l++){
        fibArr.push(fibArr[l-2]+fibArr[l-1])
    }
    // console.log(fibArr);

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
// //////////////////////////////////////////
//     h2=[]
//     finalArr2=[]
//     for(var j= 0; j<fibArr.length; j++){
//             if(sNum<fibArr[j]){
//                 h2.push(fibArr[j])
                
//             }
//     }
//     for(var i= 0; i<10;i++){
//         finalArr2.push(h2[i]);
//     }
//     console.log(finalArr2);

    

}
myFunction()