// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    reversedInt=0;
    let number=parseInt(n);
    console.log(number);
    if(n<10)
    {
        return n;
    }
    while(number>0){
        reversedInt =reversedInt *10 +(number%10)     ;
        number=number/10;
    }
    return reversedInt;
}

module.exports = reverseInt;
