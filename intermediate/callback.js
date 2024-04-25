// fungsi yg menjadi parameter dari fungsi lain
// tujuan
// 1. menjaga integritas variabel
// 2. menjaga level fleksibilitas fungsi

const bil = {
  elements: [1, 2, 3, 8, 10],
  map: function (cb) {
    const result = [];
    for (let i = 0; i < this.elements.length; i++) {
      result[i] = cb(this.elements[i]);
    }
    return result;
  },
};

const genapGanjil = (value) => {
  if (value % 2 === 0) return "genap";
  return "ganjil";
};
const kuadrat = (value) => {
  const val = value * value;
  return val;
};

const rsl = bil.map(genapGanjil);
const res = bil.map(kuadrat);

console.log(bil.elements);
console.log(rsl);
console.log(res);
