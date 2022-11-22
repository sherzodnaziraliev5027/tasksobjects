// task 1
let car={
    color:'black',
    // task3
    power:function(enginepower){
        console.log('engine power:',enginepower);
    }
}

// task 2
car.color='green';
car.power(140);

// task 4
function warehouse(Apples,Pears){
    return function(){
        Apples++;
        Pears++;
        console.log(`Apples:${Apples}\nPears:${Pears}`);
    }
}
let result=warehouse(1,1)
result();
result()

// task 5

function NameInput(name){
    if(name) console.log('your name is',name);
    else console.log('there is no such name');
}
NameInput('Sherzod');

// task 6
function Definetype(argument){
    console.log(typeof argument);
}
Definetype('Sherzod')

// task 7
function PrimeOrNot(limit){

    if(limit===0 || limit===1){
        console.log("there are no prime numbers until this numbers")
    }
    if(limit>=2){
        for(number=2;number<limit;number++){
            let isPrime = true;
            for(factor=2;factor<number;factor++){
            if(number%factor==0){
                isPrime=false; 
                break;
            }
        }
        if(isPrime) console.log(number);
        }
    }
    if(limit < 0) console.log('Negative numbers cannot include prime numbers!');
}
PrimeOrNot(20)
