const Reset = '\x1b[0m';
const Underline = '\x1b[4m';
const Red = '\x1b[31m';
const Green = '\x1b[32m';
const Yellow = '\x1b[33m';
const Gray = '\x1b[90m';

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

function format(modifier: string, message: any): string {
  return `${modifier}${message}${Reset}`;
}

function print(colour: string, type: string, message: any, args: any[]) {
  console.log(`${format(Underline, time())} | ${format(colour, type)} | ${format(colour, message)}`, ...args);
}

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {LEVEL} | {MESSAGE}`
 */
export function log(message: any, ...args: any[]): void {
  print('', 'Info ', message, args);
}

export function debug(message: any, ...args: any[]): void {
  if (process.env.DEBUG === 'true') return;

  print(Gray, 'Debug', message, args);
}

export function warn(message: any, ...args: any[]) {
  print(Yellow, 'Warn ', message, args);
}

export function error(message: any, ...args: any[]) {
  print(Red, 'Error', message, args);
}

export function good(message: any, ...args: any[]) {
  print(Green, 'Good ', message, args);
}
