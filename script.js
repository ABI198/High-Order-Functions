var numbers = [1,2,3,4,5];

//Foreach Test
manualForeach(numbers, (value, index) => {
    console.log(value*2 + ' ' +index);
});

//Map Test
var changedNumbers = manualMap(numbers, (value) => {
    return value*2;
});
console.log(changedNumbers);

//Find Test
var selectedValue = manualFind(numbers, (value) => {
    return value == 4;
});
console.log("Selected Number:" + selectedValue);

//Filter Test
var selectedValues = manualFilter(numbers, (value) => {
    return value > 2;
});
console.log(selectedValues);


//Functions
//--------------------------------------------------------------------------------------------------------

//foreach()
function manualForeach(array, callback){ 
    for(let i = 0; i < array.length; ++i){
            callback(array[i], i, array);
    }
};

//map()
function manualMap(array, callback){
    let newArray = [];
    for(let i = 0; i < array.length; ++i)
            newArray.push(callback(array[i], i, array)); 
    return newArray;
}

//find()
function manualFind(array, callback){
    let selectedValue = null;
    for(let i = 0; i < array.length; ++i){
        if(callback(array[i], i, array))
            return selectedValue = array[i];
    }
}

//filter()
function manualFilter(array, callback){
    let selectedValues = [];
    for(let i = 0; i < array.length; ++i){
        if(callback(array[i], i, array))
            selectedValues.push(array[i]);
    }
    return selectedValues;
}






