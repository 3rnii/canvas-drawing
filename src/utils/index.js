const constants = require('../config');

const printCanvas = canvas => {
  const height = canvas.length;
  const width = canvas[0].length;

  console.log('\n\n');
  for (let yIndex = 0; yIndex < height; yIndex++) {
    const xArr = canvas[yIndex];
    let printRow = '';

    for (let xIndex = 0; xIndex < width; xIndex++) {
      const currentVal = xArr[xIndex];
      if (currentVal.value === constants.BORDER.EMPTY) {
        printRow += (currentVal.color || constants.BORDER.EMPTY)
      } else {
        printRow += currentVal.value
      }
    }

    console.log(printRow);
  }
  console.log('\n\n');
};

const updateCanvas = (update, canvas) => {
  for (let i = 0; i < update.length; i++) {
    const coordinate = update[i];
    const x = coordinate[0];
    const y = coordinate[1];

    if (canvas[y] && canvas[y][x]) {
      const currentVal = canvas[y][x];
      if (currentVal.value === constants.BORDER.EMPTY) {
        currentVal.value = constants.PRINT
      }
    }
  }
};

module.exports = {
  printCanvas, updateCanvas
};
