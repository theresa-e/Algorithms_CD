
/* ------------------------------------

Complete the method / function so that it 
converts dash / underscore delimited words
into camel casing.The first word within the 
output should be capitalized only if the
original word was capitalized.

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

from codewars.com
------------------------------------ */

function toCamelCase(string) {
    let stringArr;
    if (string.indexOf("-") !== -1) {
        stringArr = string.split('-')
    } else {
        stringArr = string.split('_')
    }
    // first word remains as is
    let newStr = stringArr[0]
    console.log(stringArr)
    for (let i = 1; i < stringArr.length; i++) {
        // if the first letter is lowercase, transform
        if (stringArr[i][0] == stringArr[i][0].toLowerCase()) {
            newStr += stringArr[i][0].toUpperCase() + stringArr[i].slice(1)
            // if it's already lowercase, add as is.
        } else {
            newStr += stringArr[i]
        }
    }
    return newStr
}
