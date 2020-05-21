//Question 1-----------------------------------------

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array2 = [1, "2", "3", 2];

let groupArray = (arr) => {
    let group = arr.slice();
    let i = 0;

    while (i < group.length) {
        let value = group[i];
        let index = group.lastIndexOf(value);
        let count = index + 1 - i;

        if (count > 1) {
            group.splice(i, count, Array(count).fill(value));
        }
        i++;
    }
    return group;
}

let cleanRoom = (arr) => {
    arr = arr.sort(function(a,b) {return a - b});
    let newArray = [];
    let numberArray = arr.filter(number => typeof(number) === 'number');
    let stringArray = arr.filter(number => typeof(number) === 'string');

    let numbers = groupArray(numberArray);
    let strings = groupArray(stringArray);

    if (strings.length !== 0) {
        newArray.push(numbers), newArray.push(strings);
    } else {
        newArray = numbers;
    }
    return newArray;
}

