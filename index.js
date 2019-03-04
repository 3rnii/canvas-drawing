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

function onCommandSubmit(command) {
  const input = command.split(' ');

  switch (input[0]) {
    case constants.COMMAND.CREATE:
      canvas = create(parseInt(input[1]), parseInt(input[2]));
      utils.printCanvas(canvas);
      break;
    case constants.COMMAND.LINE:
      line(canvas, parseInt(input[1]), parseInt(input[2]), parseInt(input[3]), parseInt(input[4]));
      break;
    case constants.COMMAND.RECTANGLE:
      rectangle(canvas, parseInt(input[1]), parseInt(input[2]), parseInt(input[3]), parseInt(input[4]));
      break;
    case constants.COMMAND.FILL:
      fill(canvas, parseInt(input[1]), parseInt(input[2]), input[3]);
      break;
    case constants.COMMAND.QUIT:
      console.log('you typed quit!');
      return rl.close();
    case constants.COMMAND.HELP:
      console.log('you typed help!');
      break;
    default:
      console.error('this is on a command');
      break;
  }

  return rl.question('Please enter a command: ', onCommandSubmit);
}

rl.on('line', input => onCommandSubmit(input));
rl.question('Please enter a command: ', answer => onCommandSubmit(answer));
