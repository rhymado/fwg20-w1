function sort(arr, isAsc) {
  let isSorted = false;
  // Selama belum selesai sorting akan di looping terus
  // Looping berhenti jika sudah tidak ada peristiwa swap lagi
  while (!isSorted) {
    // inisialisasi variabel yg menandakan terjadinya peristiwa swap
    let swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (isAsc ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        //   let temp = arr[i];
        //   arr[i] = arr[i + 1];
        //   arr[i + 1] = temp;
        swap = true;
      }
    }
    // jika sudah tidak terjadi swap, maka sudahi looping
    if (!swap) isSorted = true;
  }
  return arr;
}

console.log(sort([5, 1, 4, 9, 3, 7], false));
console.log(sort([5, 1, 4, 9, 3, 7], true));
