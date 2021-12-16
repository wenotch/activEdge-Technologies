function finder(array) {
  let x = 1;

  array
    .filter((x) => x >= 1)
    .sort((a, b) => a - b)
    .map((val, i, arr) => {
      if (x < arr[i]) return;
      x = arr[i] + 1;
    });
  console.log(x);
  return x;
}

// add your array here
finder(...);
