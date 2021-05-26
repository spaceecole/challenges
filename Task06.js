function maximum(a,b,c){
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else if(c > b && c > a){
        return c;
    }
    else if (a =b =c){
        return "There is no maximum number! All numbers are equal"
    }
}
console.log(maximum(4,7,3));
console.log(maximum(5,5,5));

