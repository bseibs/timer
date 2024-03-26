const arr = [3, 5, 9, 10, 15];
const beep = function () {
  process.stdout.write("\x07");
};
arr.forEach((time) => {
  setTimeout(beep, time * 1000);
});
