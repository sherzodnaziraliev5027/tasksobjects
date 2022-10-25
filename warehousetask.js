function warehouse(){
    let apples=0;
    let pears=0;
    return function(){
        console.log('apples:',apples);
        console.log('pears:',pears);
        apples++;
        pears++
    }
}
let result=warehouse()
result();
result()



