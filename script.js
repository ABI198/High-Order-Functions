var numbers = [1,2,3,4,5];


//Test Area
manualForeach(numbers, (value, index) => {
    console.log(value*2 + ' ' +index);
});

var changedNumbers = manualMap(numbers, (value) => {
    return value*2;
});
console.log(changedNumbers);



//Functions
//--------------------------------------------------------------------------------------------------------

//Foreach
function manualForeach(array, callback){ 
    for(let i = 0; i < array.length; ++i){
        if(callback.length === 1)
            callback(array[i]);
        else if(callback.length === 2)
            callback(array[i], i);
        else if(callback.length === 3)
            callback(array[i], i, array);
        else    
            console.error("You used more arguments than expexted!")
    }
};

//Map
function manualMap(array, callback){
    let newArray = [];
    for(let i = 0; i < array.length; ++i){
        if(callback.length === 1)
           newArray.push(callback(array[i])); 
        else if(callback.length === 2)
            newArray.push(callback(array[i], i)); 
        else if(callback.length === 3)
            newArray.push(callback(array[i], i, array)); 
        else    
            console.error("You used more arguments than expexted!")
    }
    return newArray;
}






