const slash = function() {
    if (process.platform.includes('win')) {
        return '\\';
    } else {
        return '/';
    }
};

/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {MODULE} | {MESSAGE}`
 *
 * **For more info on each of these and more, check the {@link https://github.com/jamesinaxx/Abbie/wiki/Reference wiki on github}**
 *
 *
 * @param {string} message The message you would like to log
 * @param {number} level The level of log message (0 = info, 1 = error, 2 = good news)
 */
function log(message, level = 0) {
    function getName(string) {
        let name = string;
        const dirs = [''];
        dirs.shift();
        for (const word of name.split(slash())) {
            dirs.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
        name = dirs
            .join('/')
            .replace('.js', '')
            .replace('.ts', '')
            .replace('.jsx', '')
            .replace('.tsx', '');

        return name;
    }

    const type = getName(
        require.main.filename.replace(require('app-root-path').path + slash(), ''),
    );

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

    const chalk = require('chalk');

    let lvl = '';

    switch (level) {
        case 1:
            message = chalk.red(message);
            lvl = chalk.red('Error');
            break;
        case 2:
            message = chalk.green(message);
            lvl = chalk.green('Good ');
            break;
        default:
            lvl = 'Info ';
            break;
    }

    console.log(
        `${chalk.green(time())} | ${lvl} | ${chalk.cyanBright(
            '[' + type + ']',
        )} ${message}`,
    );
}

module.exports.log = log;
