const test = [56,34,11,10,74,81];

function search(arr,target){
    for (let i=0; i<arr.length;i++){
        if(arr[i] == target) return i;
    } return -1;
}

console.log(search(test,56));
console.log(search(test,74));
