function celsius(temp1){
    newtemp = (temp1 * 9/5) + 32;
    return newtemp;
}

function heit(temp2){
    reverse = (temp2 - 32) * 5/9;
    return reverse;
}

console.log("Temperature in Fahrenheit is " + celsius(32));
console.log("Tempereture in Celsius is " + heit(59));
