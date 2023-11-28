/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */
/**
 * Transforms a collection into a string.
 * @param {string[]} collection - The collection to be transformed.
 * @returns {string} - The transformed collection.
 */
/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */
/**
 * CASE #2
 * input: []
 * output: ""
 */
import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";

const transformCollectionToString = function (collection) {
  return checkCollectionHasElements(collection) ? collection.join(" | ") : "";
};

export default transformCollectionToString;
