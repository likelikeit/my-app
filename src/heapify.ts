function heapify(arr, i, n) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let min = i;

  if (left > n || right > n) {
    return
  }


  if (left < n && arr[left] > arr[min]) {
    min = left;
  }
  if (right < n && arr[right] > arr[min]) {
    min = right;
  };
  console.log(min, i)
  if (min != i) {
    swap(arr, i, min);
    heapify(arr, min, n)
  }
};
function swap(tree, i, min) {
  const tmp = tree[i];
  tree[i] = tree[min];
  tree[min] = tmp;
};

function heap_arr() {
  const arr = [1, 2, 3, 4, 5, 6, 8];
  for (var i = 7;i>=0;i--) {
    heapify(arr, i, 7)
  }
  console.log(arr)
};
heap_arr()
