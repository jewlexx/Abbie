/**
 *
 * @param {string} message The message you would like to log
 * @param {number} level The level of log message (0 = info, 1 = error, 2 = good news)
 */
exports.log = function (message, level = 'info') {
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
};
