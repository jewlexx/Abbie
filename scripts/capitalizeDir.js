module.exports = {
    /**
     *
     * @param {string} string
     */

    run(string) {
        const dir = [''];
        dir.shift();
        for (const word of string.split('\\')) {
            dir.push(require('./capitalizeFirstLetter').run(word));
        }
        return dir.join('/');
    },
};
