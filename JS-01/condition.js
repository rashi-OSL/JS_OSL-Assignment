//conditional statement that checks if a given number is positive, negative, or zero.

var x=Math.floor(Math.random()*10)-7;
console.log(x);
if(x==0){
    console.log(x + " is zero");
}else if(x<0){
    console.log(x + " is negative");
}else{
    console.log(x + " is positive");
}
