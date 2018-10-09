/* ------------------------------------
Given a rectangular matrix of characters, add a border of asterisks( * ) to it.

picture = ["abc",
        "ded"]
the output should be:
addBorder(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                    "*****"]
------------------------------------ */

function addBorder(picture) {
    for (var i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*"
    }
    var frameWidth = picture[0].length - 1
    var frame = ""
    let j = 0;
    while (j <= frameWidth) {
        frame += "*"
        j++
    }
    // top of frame
    picture.unshift(frame)
    // bottom of frame
    picture.push(frame)
    return picture
}