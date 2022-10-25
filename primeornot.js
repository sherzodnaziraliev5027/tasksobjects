// prime is or not
function PrimeOrNot(limit){
    for(number=2;number<limit;number++){
       let isPrime=true;
       for(factor=2;factor<number;factor++){
        if(number%factor==0){ 
            isPrime=false; 
            break;
        }
    }
    if(isPrime) console.log(number);
}
}
PrimeOrNot(20)