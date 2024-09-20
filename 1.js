function findTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]; 
        }
    }
    return null; 
}
}

const arr = [2, 7, 11, 15];
let target = 9;

const result = findTwoSum(arr, target);

console.log(result);
