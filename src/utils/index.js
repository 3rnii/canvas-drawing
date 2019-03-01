const printCanvas = canvas => canvas.forEach((row, index) => {
  if (index === 0) {
    console.log(' ');
    console.log(row);
  } else if (index === canvas.length - 1) {
    console.log(row, '\n');
  } else {
    console.log(row);
  }
});

module.exports = {
  printCanvas
};
