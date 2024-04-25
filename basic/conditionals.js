/**
 * BENTUK
 * 1. IF ELSE
 * 2. SWITCH CASE
 * 3. TERNARY
 * 4. SHORT CIRCUIT LOGIC
 */

// if else
/**
 * if (ekspresi logika){
 *  process if true
 * } else {
 *  process if false
 * }
 * ekspresi logika bisa berisikan apapun selama menghasilkan nilai boolean
 */

// switch case
/**
 * switch(variabel yg mau dievaluasi){
 *  case evaluasi 1: process 1;
 *  case evaluasi 2: process 2;
 *  case evaluasi n: process n;
 *  default: jika tidak ditemukan evaluasinya
 * }
 */

// logika konversi teks warna menjadi kode html nya

// const COLOR = "indigo";
// switch (COLOR) {
//   case "black":
//     console.log("#000000");
//     break;
//   case "white":
//     console.log("#ffffff");
//     break;
//   case "blue":
//     console.log("#0000FF");
//     break;
//   default:
//     console.log("warna tidak ditemukan");
// }

// TERNARY OPERATOR (?)
// shorthand dari if else

const nilai = 60;
if (nilai > 60) {
  console.log("lulus");
} else {
  console.log("gagal");
}

// ekspresi logika ? process if true : process if false
nilai > 60 ? console.log("lulus") : console.log("gagal");

// SHORT CIRCUIT LOGIC
// shorthand TERNARY
// jika expected TRUE
// ekspresi logika && process if true
// jika expected FALSE
// ekspresi logika || process if false

// nilai > 60 && console.log("lulus");
nilai > 60 || console.log("gagal");
