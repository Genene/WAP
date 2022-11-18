

const readline = require('readline').createInterface
({
    input:process.stdin,
    output:process.stdout
});



sum=0;
function getNumber(){

   let result=  readline.question("enter a number: ",input=>{
        if(input==='stop')
        {
            console.log("sum of numbers: "+sum)
            readline.close;
        }
        else
        {
                sum=sum+parseInt(input);
                process.nextTick(getNumber);
        }
});

}

getNumber();