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

document.getElementById('AvailRoomList').innerHTML = linesOfHtml;