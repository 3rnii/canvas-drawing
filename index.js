const readline = require('readline');
const constants = require('./src/config.json');
const create = require('./src/commands/create');
const line = require('./src/commands/line');
const rectangle = require('./src/commands/rectangle');
const fill = require('./src/commands/fill');
const utils = require('./src/utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let canvas = [];
let hasCanvas = false;

function onCommandSubmit(command) {
  const input = command.split(' ');

  switch (input[0]) {
    case constants.COMMAND.CREATE:
      hasCanvas = true;
      canvas = create(parseInt(input[1]), parseInt(input[2]));
      utils.printCanvas(canvas);
      break;
    case constants.COMMAND.LINE:
      if (hasCanvas) {
        line(canvas, parseInt(input[1]), parseInt(input[2]), parseInt(input[3]), parseInt(input[4]));
      } else {
        console.log('Please create a canvas first');
      }
      break;
    case constants.COMMAND.RECTANGLE:
      if (hasCanvas) {
        rectangle(canvas, parseInt(input[1]), parseInt(input[2]), parseInt(input[3]), parseInt(input[4]));
      } else {
        console.log('Please create a canvas first');
      }
      break;
    case constants.COMMAND.FILL:
      if (hasCanvas) {
        fill(canvas, parseInt(input[1]), parseInt(input[2]), input[3]);
      } else {
        console.log('Please create a canvas first');
      }
      break;
    case constants.COMMAND.QUIT:
      console.log('Quitting...');
      return rl.close();
    default:
      console.error('Invalid Command');
      break;
  }

  return rl.question('Please enter a command: ', onCommandSubmit);
}

rl.on('line', input => onCommandSubmit(input));
rl.question('Please enter a command: ', answer => onCommandSubmit(answer));
