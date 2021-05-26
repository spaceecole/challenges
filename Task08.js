function time(num) {
    if (num < 60) {
        if (num == 1) {
            return (num + " minutes");
        }
    else {
         return (num + " minutes"); }
        
    } 
     if (num >= 60) {
        integerDivision = Math.floor(num/ 60);
        remainder = num % 60;
        
        if (remainder == 1) {
            return (remainder + "minutes");
        }
        else {
            return (remainder + "minutes");
        } 
        if (integerDivision == 1) {
            return (integerDivision + " hour");
            }
        else {
            return (integerDivision + " hours");
            }
        } 
    return ( integerDivision + remainder);  }
    
     console.log(time(90));
     console.log(time(60));
     console.log(time(40));
