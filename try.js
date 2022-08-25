// const fibArr=[0,1]
function myFunction(){
    // fNum=10
    // sNum=20
    // console.log(fNum);
    // console.log(sNum);
    
    // for(var i=2; i<fNum*11;i++){
    //     fibArr.push(fibArr[i-2]+fibArr[i-1])
    // }
//////////////////////////////////////////////
    
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






}
myFunction()
