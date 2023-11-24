/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */
/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**Check number of words contained in given string, if total number of words is greater then 5,
 * then return uppercase string, otherwise, return lower case string
 * @param {string} sentence
 * @returns {string} sentenceOutput
 */
import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";

const formatStringByWordsLength = function (sentence) {
  const totalWords = getTotalWordsFromString(sentence);

  return totalWords > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
};

export default formatStringByWordsLength;
/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */
