const fibArr=[0,1]

function myFunction(){
    
    fNum=4
    sNum=8
    fibArr[0]=fNum
    fibArr[1]=sNum
   
    for(var i=2; i<10;i++){
        fibArr.push(fibArr[i-2]+fibArr[i-1])
    }
    console.log(fibArr);
//     h=[]
//     finalArr1=[]
//     for(var j= 0; j<fibArr.length; j++){
//             if(fNum<fibArr[j]){
//                 h.push(fibArr[j])
                
//             }
//     }
//     for(var i= 0; i<10;i++){
//         finalArr1.push(h[i]);
//     }
//     console.log(finalArr1);
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