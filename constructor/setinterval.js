function print(a, b) {
  let present = a;
  let id = setInterval(() => {
    console.log(present);
    if (present == b) {
      clearInterval(id);
    }
    present++;
  }, 2000);
}
print(1, 10);

