const { urlValidation } = require('../js/checkURL');

test(' Valid URL .... ', () => {
    expect(urlValidation('some string')).toBeFalsy();
    expect(urlValidation(55)).toBeFalsy();
    expect(urlValidation('$2314nj jn545 %%$$$ ')).toBeFalsy();
    expect(urlValidation('https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries')).toBeTruthy();
})