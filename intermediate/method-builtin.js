// Array.sort
// Method yg digunakan untuk mengurutkan elemen didalam array
// Menggunakan algoritma in-place
// Bersifat Mutasi => mengubah variabel aslinya secara langsung

const bil = [2, 4, 3, 10, 5, 11];
// bil.sort(); // pengurutan berdasarkan tabel ASCII
// console.log(bil);
// bil.sort((a, b) => b - a); // descending
bil.sort((a, b) => a - b); // ascending
/**
 * 2 - 4 = -
 * 4 - 3 = + => 2 3 4 10 5 11
 * 4 - 10 = -
 * 2 - 3 = -
 * 10 - 5 = + => 2 3 4 5 10 11
 * 10 - 11 = -
 */
/**
 * 4 - 2 = + => 4 2 3 10 5 11
 * 3 - 2 = + => 4 3 2 10 5 11
 * 10 - 2 = + => 4 3 10 2 5 11
 * 5 - 2 = + => 4 3 10 5 2 11
 * 11 - 2 = + => 4 3 10 5 11 2
 * 3 - 4 = -
 * 10 - 3 = + => 4 10 3 5 11 2
 * 5 - 3 = + => 4 10 5 3 11 2
 * 11 - 3 = + => 4 10 5 11 3 2
 * 2 - 3 = -
 * 10 - 4 = + => 10 4 5 11 3 2
 * 5 - 4 = + => 10 5 4 11 3 2
 * 5 - 10 = -
 * 11 - 4 = + => 10 5 11 4 3 2
 * 11 - 5 = + => 10 11 5 4 3 2
 * 11 - 10 = + => 11 10 5 4 3 2
 * 3 - 4 = -
 */
// console.log(bil);

// Array.reverse
// memutarbalikkan urutan dari elemen didalam array
// Menggunakan algoritma in-place
// bersifat mutasi

bil.reverse();
// console.log(bil);

// Array.push
// menambahkan elemen baru ke posisi paling belakang
// bersifat mutasi
// return panjang array setelah di push

const r = bil.push(6);
// console.log(r);
// console.log(bil);

// Array.map
// untuk menjalankan suatu proses berulang untuk setiap elemen array
// mengubah elemen yg lama menjadi elemen yg baru
// bersifat non-mutasi => harus ditampung output

const hasil = bil.map((val) => {
  if (val % 2 === 0) return "genap";
  return "ganjil";
});
// console.log(bil);
// console.log(hasil);

// String.split
// untuk memisahkan elemen string berdasarkan pemisahnya
// menghasilkan array
// bersifat non-mutasi

const str = "saya belajar javascript";
const a = str.split();
const b = str.split("");
const c = str.split(" ");
// console.log(a);
console.log(b);
// console.log(c);

// Array.join
// untuk menggabungkan elemen array berdasarkan pemisahnya
// menghasilkan string
// bersifat non-mutasi

const astr = b.join();
const bstr = b.join("");
const cstr = b.join("g");
console.log(astr);
console.log(bstr);
console.log(cstr);
