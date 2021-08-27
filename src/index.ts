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

  const time = `${hour}:${minute}:${second}`;

  return time;
}

function print(type: string, message: any, args: any[]) {
  console.log(`${chalk.green(time())} | ${type} | ${message}`, ...args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 */
export function log(message: any, ...args: any[]): void {
  print('Info ', message, args);
}

export function debug(message: any, ...args: any[]): void {
  if (process.env.DEBUG === 'true') return;

  print(chalk.grey('Debug'), message, args);
}

export function warn(message: any, ...args: any[]) {
  print(chalk.yellow('Warn '), message, args);
}

export function error(message: any, ...args: any[]) {
  print(chalk.red('Error'), message, args);
}

export function good(message: any, ...args: any[]) {
  print(chalk.green('Good '), message, args);
}
