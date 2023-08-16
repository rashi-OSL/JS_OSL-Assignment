//function called "calculateArea" that takes the length and width as parameters and calculates the area of a rectangle.

//Call the function with different sets of length and width values and display the results.


function calculateArea(length,width){
    let area = length*width;
    return area;
}
var length=Math.floor(Math.random()*50)+1;
var width=Math.floor(Math.random()*50)+1;
var area = calculateArea(length,width);
console.log("length= "+length);
console.log("width= "+width);
console.log("area= "+area);
