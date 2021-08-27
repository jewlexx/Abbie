import * as chalk from 'chalk';

function time() {
  const date = new Date();

  let hour = date.getHours().toString();

  if (hour.length == 1) {
    hour = '0' + hour;
  }

  let minute = date.getMinutes().toString();

  if (minute.length == 1) {
    minute = '0' + minute;
  }

  let second = date.getSeconds().toString();

  if (second.length == 1) {
    second = '0' + second;
  }

  const timeVar = `${hour}:${minute}:${second}`;

  return timeVar;
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {MODULE} | {MESSAGE}`
 *
 * **For more info on each of these and more, check the {@link https://github.com/jamesinaxx/Abbie/wiki/Reference wiki on github}**
 *
 *
 * @param {string} message The message you would like to log
 * @param {number} level The level of log message, view types {@link https://github.com/jamesinaxx/Abbie/wiki/Reference here}
 */
function log(message: any, ...args: any[]) {
  const debugBool = process.env.DEBUG == 'true';

  let lvl = 'Info ';

  // switch (level) {
  //   case 1:
  //     message = chalk.red(message);
  //     lvl = chalk.red('Error');
  //     break;
  //   case 2:
  //     message = chalk.green(message);
  //     lvl = chalk.green('Good ');
  //     break;
  //   case 3:
  //     message = chalk.yellow(message);
  //     lvl = chalk.yellow('Warn ');
  //     break;
  //   case 4:
  //     message = chalk.grey(message);
  //     lvl = chalk.grey('Debug');
  //     break;
  //   default:
  //     lvl = 'Info ';
  //     break;
  // }
  if (!debugBool && lvl === chalk.grey('Debug')) {
    return;
  }
  console.log(
    `${chalk.green(time())} | ${lvl} | ${chalk.cyanBright(
      '[' + 'TEMP' + ']',
    )} ${message}`,
  );
}

export { log };
