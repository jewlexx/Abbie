/**
 *
 * @param {string} message The message you would like to log
 * @param {number} level The level of log message (0 = info, 1 = error, 2 = good news)
 */
export default function log(message: string, level: number = 0) {
    const chalk = require('chalk');
    function getName(string) {
        let name = string;
        const dirs = [''];
        dirs.shift();
        for (const word of name.split('\\')) {
            dirs.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
        name = dirs.join('/');

        return name;
    }

    const type = getName(
        require.main.filename.replace(require('app-root-path').path + '\\', ''),
    )
        .replace('.js', '')
        .replace('.ts', '')
        .replace('.jsx', '')
        .replace('.tsx', '');

    // #region Timestamp
    function time() {
        const date = new Date();

        // #region Hour
        let hour = date.getHours();

        if (hour > 12) {
            hour = hour - 12;
        }

        let hourS = hour.toString();

        if (hourS.length == 1) {
            hourS = '0' + hour.toString();
        }
        // #endregion Hour

        // #region Minute
        let minute = date.getMinutes();

        let minuteS = minute.toString();

        if (minuteS.length == 1) {
            minuteS = '0' + minute.toString();
        }
        // #endregion Minute

        // #region second
        let second = date.getSeconds();

        let secondS = second.toString();

        if (secondS.length == 1) {
            secondS = '0' + second.toString();
        }
        // #endregion second

        const timeVar = `${hour.toString()}:${minute.toString()}:${second.toString()}`;

        return timeVar;
    }
    // #endregion Timestamp

    switch (level) {
        case 1:
            message = chalk.red(message);
            break;
        case 2:
            message = chalk.green(message);
            break;
        default:
            break;
    }

    console.log(
        `${chalk.green(time())} | ${chalk.cyanBright(
            '[' + type + ']',
        )} ${message}`,
    );
}
