function bubbleSort(arr) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1])
        swap(arr, j, j+1);
    }
  }

  return arr;
}

console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([0,8,6,2,1]));
console.log(bubbleSort([0,8,6,2,8]));