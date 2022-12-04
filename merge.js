function merge(arr1, arr2) {
    let results = []; 
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]); 
            i++; 
        } else {
            results.push(arr2[j]); 
            j++; 
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]); 
        i++;
    }

    while(j < arr2.length){
        results.push(arr2[j]); 
        j++; 
    }

    return results;
}

function mergeSort(arr) {
    // if array is 1 or less return
    if(arr.length <= 1) return arr; 

    // Break up the array into halves
    let mid = Math.floor(arr.length / 2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 

    // implement a merge function
    return merge(left, right); 
}

module.exports = { merge, mergeSort};