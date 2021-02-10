const chalk = require('chalk');
const dir = require('app-root-path') + '\\';

/**
 *
 * @param {string} message The message you would like to log
 * @param {string} level The level of log message (can be info, good or error)
 */
exports.log = function (message, level = 'info') {
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

    const type = getName(require.main.filename.replace(dir, ''))
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

        hour = hour.toString();

        if (hour.length == 1) {
            hour = '0' + hour.toString();
        }
        // #endregion Hour

        // #region Minute
        let minute = date.getMinutes();

        minute = minute.toString();

        if (minute.length == 1) {
            minute = '0' + minute.toString();
        }
        // #endregion Minute

        // #region second
        let second = date.getSeconds();

        second = second.toString();

        if (second.length == 1) {
            second = '0' + second.toString();
        }
        // #endregion second

        const timeVar = `${hour.toString()}:${minute.toString()}:${second.toString()}`;

        return timeVar;
    }
    // #endregion Timestamp

    switch (level) {
        case 'error':
            message = chalk.red(message);
            break;
        case 'good':
            message = chalk.green(message);
            break;
    }

    console.log(
        `${chalk.green(time())} | ${chalk.cyanBright(
            '[' + type + ']',
        )} ${message}`,
    );
};
