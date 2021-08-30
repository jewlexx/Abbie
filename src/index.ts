import { red, green, yellow, gray, white, Chalk } from 'chalk';
// const Reset = '\x1b[0m';
// const Red = '\x1b[31m';
// const Green = '\x1b[32m';
// const Yellow = '\x1b[33m';
// const Gray = '\x1b[90m';

function getTime() {
  const date = new Date();

  let hour = date.getHours().toString();

  if (hour.length === 1) {
    hour = `0${hour}`;
  }

  let minute = date.getMinutes().toString();

  if (minute.length === 1) {
    minute = `0${minute}`;
  }

  let second = date.getSeconds().toString();

  if (second.length === 1) {
    second = `0${second}`;
  }

  const time = `${hour}:${minute}:${second}`;

  return time;
}

function format(modifier: Chalk, message: any): string {
  return modifier(message);
}

function print(colour: Chalk, type: string, message: any, args: any[]) {
  console.log(`[${getTime()}] ${format(colour, type)} | ${format(colour, message)}`, ...args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 *
 * @param {any} message The message to log
 * @param {...any[]} args The optional arguments
 */
export function log(message: any, ...args: any[]): void {
  print(white, 'Info ', message, args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 *
 * @param {any} message The message to log
 * @param {...any[]} args The optional arguments
 */
export function debug(message: any, ...args: any[]): void {
  if (process.env.DEBUG === 'true') return;

  print(gray, 'Debug', message, args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 *
 * @param {any} message The message to log
 * @param {...any[]} args The optional arguments
 */
export function warn(message: any, ...args: any[]) {
  print(yellow, 'Warn ', message, args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 *
 * @param {any} message The message to log
 * @param {...any[]} args The optional arguments
 */
export function error(message: any, ...args: any[]) {
  print(red, 'Error', message, args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 *
 * @param {any} message The message to log
 * @param {...any[]} args The optional arguments
 */
export function good(message: any, ...args: any[]) {
  print(green, 'Good ', message, args);
}
