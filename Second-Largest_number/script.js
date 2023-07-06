const a = [2, 12, 9, 11, 8];
n = a.length;
let first = -1;
let second = 0;
for (let i = 0; i < n; i++) {
  if (a[i] > first) {
    second = first;
    first = a[i];
  } else if (a[i] != first && a[i] > second) {
    second = a[i];
  }
}

console.log(a);
console.log("The Largest Number is", first);
console.log("The Second Largest Number is", second);
