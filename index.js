const chalk = require('chalk');
const dir = require('app-root-path') + '\\';

/**
 *
 * @param {string} message The message you would like to log
 * @param {string} dirname The directory from the executing file
 * @param {string} filename The file name from the executing file
 * @param {string} level The level of log message (can be info, good or error)
 * @param {string} type The module name shown in the log message (it is not reccomended you override this)
 */
exports.log = function (
    message,
    dirname,
    filename,
    level = 'info',
    type = null,
) {
    if (type === null) {
        type = require('./scripts/capitalizeDir').run(
            dirname.replace(dir, '') +
                '/' +
                require('./scripts/capitalizeFirstLetter').run(
                    require('path').basename(filename).split('.')[0],
                ),
        );
    }

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
        case level === 'error':
            message = chalk.red(message);
            break;
        case level === 'good':
            message = chalk.green(message);
            break;
    }

    console.log(
        `${chalk.green(time())} | ${chalk.cyan('[' + type + ']')} ${message}`,
    );
};
