// 1'den n'ye kadar olan sayıları toplayan kodu yazınız.

const n = prompt("number: ");
let toplam = 0;

if (n >= 1) {
  for (let i = 1; i <= n; i++) {
    toplam += i;
  }
} else {
  for (let i = 1; i >= n; i--) {
    toplam += i;
  }
}
console.log(toplam);
