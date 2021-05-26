function check(str1, str2){
 
    str1 = str1.toLowerCase().split('')
    str2 = str2.toLowerCase().split('')
    while (true){
        for (let a of str1){
            if (str2.includes(a)){
                return a;
            } 

        } 
    }


}
console.log(check('meal', 'seal'));