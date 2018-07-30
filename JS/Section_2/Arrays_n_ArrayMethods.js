//Create Some Arrays 
    const numbers = [43,65,71,62,30,3,31];
    const numbers2= new Array(43,65,71,62,30,3,31);
    const fruit = ['Orange','Lemon','Tangerine','Apple'];
    const mixed = ['Jhon',22,true,undefined,null,{a:1,b:6}, new Date()];
    let val;
//Get Array Length
    val = numbers.length;
//Check if is array
    val = Array.isArray(numbers);
//Get a Single Value
    val = mixed[6];
// Insert into array
    numbers[2]= 100
    val = numbers
// Find index of value
    val = numbers.indexOf(100);

//Mutating arrays
//add on the end
    numbers.push(250);
//add on the front
    numbers.unshift(36);
//take off from the end
    numbers.pop();
//take off from front
    numbers.shift();
//Splice Values
    numbers.splice(1,2);
//Reverse
    numbers.reverse();

    val = numbers
//Concatenate array
val = numbers.concat(numbers2);
// Sorting array
val = fruit.sort();
val = mixed.sort();

val = numbers2.sort(function(x,y){
    return x-y;
});
//Reverse sorting
val = numbers2.sort(function(x,y){
    return y-x;
});
//Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(val);
console.log(numbers);