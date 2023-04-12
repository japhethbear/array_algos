// Push Front

// function pushFront(array, num) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         array[i + 1] = array[i]
//     }
//     array[0] = num;
//     return array;
// }

// console.log(pushFront([7, 3, 9], 44))


// Pop Front

// function popFront(array) {
//     let first = array[0];
//     for (let i = 0; i < array.length -1; i++) {
//         array[i] = array[i + 1];
//     }
//     array.length--;
//     console.log(array)
//     return first;
// }

// console.log(popFront(randomArray))

// Insert At
let randomArray=[7, 3, 9, -11, 0, 41]

// function insertAt(array, index, value) {
//     array.splice(index, 0, value);
//     return array;
// }

// console.log(insertAt(randomArray, 3, 7))


// Remove At

// function removeAt(array, index) {
//     removed = array[index];
//     array.splice[index, 1];
//     console.log(removed);
//     return array;
// }

// console.log(removeAt(randomArray, 2))

// Swap Pairs

// function swapPairs(array) {
//     for (let i = 0; i < array.length -1; i += 2) {
//         [array[i], array[i +1]] = [array[i +1], array[i]];
//     }
//     return array;
// }

// console.log(swapPairs(randomArray))

// Remove Duplicates

function removeDuplicates(array) {
    let lastValue = undefined;

    array = array.filter((value) => {
        if (value !== lastValue) {
            lastValue = value;
            return true;
        } else {
            return false;
        }
    });
    return array;
}

console.log(removeDuplicates([2, 4, 4, 5, 5, 5, 5, 5, 7, 9, 11, 909, 41, -51, -51, 4]))




