function merge(arr1, arr2, m, n) {
    let i=m-1, j=n-1, k=m+n-1;
    while(i>=0 && j>=0) {
        if(arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        }
        else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }
    while(i>=0) {
        arr1[k] = arr1[i];
        i--;
        k--;
    }
    while(j>=0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    return arr1;
}

let arr1 = [1];
let arr2 = [];
let m=1, n=0;
console.log(merge(arr1, arr2, m, n));