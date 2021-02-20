/**
 *
 * @param {string} message
 * @param {number} level
 */
module.exports.time = function time() {
    const date = new Date();

    // #region Hour
    let hour = date.getHours().toString();

    if (hour.length == 1) {
        hour = '0' + hour.toString();
    }
    // #endregion Hour

    // #region Minute
    let minute = date.getMinutes().toString();

    if (minute.length == 1) {
        minute = '0' + minute.toString();
    }
    // #endregion Minute

    // #region second
    let second = date.getSeconds().toString();

    if (second.length == 1) {
        second = '0' + second.toString();
    }
    // #endregion second

    const timeVar = `${hour.toString()}:${minute.toString()}:${second.toString()}`;

    return timeVar;
};
