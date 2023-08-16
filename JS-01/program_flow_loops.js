//loop to display even numbers from 1 to 20.
var i=1;
while(i<=20){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

//loop to calculate the factorial of a given number.
var x=5;
function fact(x){
    var res=1;
    if(x<0){
        console.log("invalid number for factorial");

    }
    for(let i=1;i<=x;i++){
        res*=i;
    }
    return res;
}
console.log("factorial of "+x+" is: " +fact(x));
