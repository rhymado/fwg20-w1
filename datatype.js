const a = "a";
let b = 1;

const typeA = typeof a;
const typeB = typeof b;

// console.log(typeA);
// console.log(typeB);

const r = "1";
if (typeof r == "number") {
} else {
  console.log("input error");
}

/**
 * PRIMITIVE TYPE
 * 1. NUMBER
 * 2. STRING
 * 3. BOOLEAN
 * 4. UNDEFINED => belum didefinisikan, tidak ada
 * 5. NULL => terdefinisi, kosong
 * NON-PRIMITIVE TYPE
 * 6. OBJECT => kumpulan data (array, object, class)
 * 7. FUNCTION => kumpulan kode, nilainya bisa berubah
 */

// beda antara kosong(null) dan tidak ada(undefined)?