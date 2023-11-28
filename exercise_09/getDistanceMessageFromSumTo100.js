/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/*
 * Generates a rounded random number within a specified range.
 * @param {number} limit - The upper limit for the random number (exclusive).
 * @param {number} value - The value to be summed with the random number.
 * @param {number} sum - The sum of the random number and the value.
 * @returns {string} - The message with the sum and the distance from 100.
 * @returns {number} - The generated random number.
 */
/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";

const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(100);
  const limit = isGreaterThan(randomNumber, 100);
  const sum = value + randomNumber;

  if (limit == true) {
    return `Sum with value ${sum} exceeds in ${sum - 100} from number 100`;
  }
  if (limit == false) {
    return `Sum with value ${sum} is left in ${100 - sum} from number 100`;
  }
};
export default getDistanceMessageFromSumTo100;
