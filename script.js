//Задача 1 домашно 13:
function area(a, b, c){
    var result;
    var result = (a*b)+(a*(c-b)/2);
    return result;
}
console.log (area(10, 6, 10)); //=>80

//Задача 2 домашно 13
function convert(red, green, blue) {
    var result;
    var redHex = red.toString(16);
    var greenHex = green.toString(16);
    var blueHex = blue.toString(16);
    var hex = "#" + red + green + blue;
    result = "#" + redHex + greenHex + blueHex;
    var redHex = ((red < 16) ? "0" : "") + red.toString(16);
    if (redHex.length === 1) {
        redHex = "0" + redHex;
    }

   
    return result;
}

console.log(convert(255, 192, 253)); // => #ffc0fd

//Задача 3 домашно 13
function circle(radius) {
    var pi = Math.PI;
    var result = pi*radius*radius;

    return Math.round(result);
}

console.log(circle(5)); // => 79