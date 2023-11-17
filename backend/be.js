//looping berdasarkan isi angka dan panjang angkanya
function segitiga(panjang) {
  let angka = '';
  for (let i = 0; i <= panjang; i++) {
    for (let j = 0; j <= i; j++) {
      angka += '0';
    }
    angka += '\n';
  }
  return angka;
}

console.log(segitiga(10));

function ganjil(pbil) {
  let angka = '';
  for (let i = 1; i <= pbil; i++) {
    if (i % 2 == 0) {
      angka += i;
    }
  }
  return angka;
}

console.log(ganjil(10));

function prima(panj) {
  let angka = '';
  let pembagi = 0;
  for (let i = 0; i <= panj; i++) {
    if (panj % i == 0) {
      pembagi++;
      console.log(pembagi);
    }
    if (pembagi == 2) {
      angka = i;
    }
  }
  return angka;
}

console.log(prima(10));
