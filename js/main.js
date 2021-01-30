//#Source https://github.com/30-seconds/30-seconds-of-code
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

getRandomInteger(0,5);

const MAX_ALLOWED_COMMENT_LENGTH = 120;
const TEST_STRING = 'Lorem';
const isAllowedString = (string,maxLength) => (string.length <= maxLength) ? true : false;

isAllowedString(TEST_STRING,MAX_ALLOWED_COMMENT_LENGTH)
