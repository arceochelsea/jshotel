document.getElementById('hotelName').innerText = "The DOM hotel";
document.getElementById('slogan').innerText = "Our Customers are the OBJECTS of our desire (no creepy)"

let availableRooms = [101, 102, 103, 104];

// let linesOfHtml = "<select> <option value='101'>101</option> </select>";

let linesOfHtml = "<select>";
for (let i = 0; i < availableRooms.length; i++) {
linesOfHtml = linesOfHtml + `<option value='${availableRooms[i]}'>${availableRooms[i]}</option>`;  
}
linesOfHtml = linesOfHtml + "</select>";

console.log(linesOfHtml);

// let linesOfHtmlTwo = "<select>";
// linesOfHtmlTwo = linesOfHtmlTwo + `<option value='${availableRooms[1]}'>${availableRooms[1]}</option>`;
// linesOfHtmlTwo = linesOfHtmlTwo + "</select>";

// console.log(linesOfHtmlTwo);

// let linesOfHtmlThree = "<select>";
// linesOfHtmlThree = linesOfHtmlThree + `<option value='${availableRooms[2]}'>${availableRooms[2]}</option>`;
// linesOfHtmlThree = linesOfHtmlThree + "</select>";

// console.log(linesOfHtmlThree);

// let linesOfHtmlFour = "<select>";
// linesOfHtmlFour = linesOfHtmlFour + `<option value='${availableRooms[2]}'>${availableRooms[2]}</option>`;
// linesOfHtmlFour = linesOfHtmlFour + "</select>";

// console.log(linesOfHtmlFour);

// for (let i = 0; i < availableRooms.length; i++) {
//     if (availableRooms[i] < 105) {
//         console.log(linesOfHtml);
//     }
// }

document.getElementById('AvailRoomList').innerHTML = linesOfHtml;