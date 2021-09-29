const validUrl = require('valid-url');

const urlValidation = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    urlValidation,
};