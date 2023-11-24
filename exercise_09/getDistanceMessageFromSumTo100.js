/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/*
 * Generates a rounded random number within a specified range.
 *  @param {number} limit - The upper limit for the random number (exclusive).
 *  @param {number} value - The value to be summed with the random number.
 *  @returns {number} - The generated random number.
 */
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";

const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(100);
  const sum = value + randomNumber;

  if (sum > 100) {
    return `Sum with value ${sum} exceeds in ${sum - 100} from number 100`;
  }
  if (sum < 100) {
    return `Sum with value ${sum} is left in ${100 - sum} from number 100`;
  }
};
export default getDistanceMessageFromSumTo100;
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
