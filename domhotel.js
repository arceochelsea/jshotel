document.getElementById('hotelName').innerText = "The DOM hotel";
document.getElementById('slogan').innerText = "Our Customers are the OBJECTS of our desire (no creepy)"


let domHotel = { //object of properties 
    availableRooms: [ [101, 102, 103, 104], [201], [], [401, 402] ], 
    bookedRooms: [ [], [], [], [] ],
    roomTypes: ["Single", "Double", "Queens", "King"],

    bookRoom: function () {
        this.bookedRooms[0].push(this.availableRooms[0].pop());
        this.updateAvailableRoomsInTheDom();
    },

    // unbookRoom: function () {
        
    // }

    updateAvailableRoomsInTheDom: function () {
        let linesOfHtml = "<select>";
        for (let i = 0; i < this.availableRooms.length; i++) {
        for (let j = 0; j < this.availableRooms[i].length; j++) { 
        linesOfHtml = linesOfHtml + `<option value='${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;  
    }
}
        linesOfHtml = linesOfHtml + "</select>";
        document.getElementById('AvailRoomList').innerHTML = linesOfHtml;
    }
}

domHotel.updateAvailableRoomsInTheDom(); //updates avail rooms in dom, called once when the function begins
domHotel.bookRoom(); //extra credit is sending a number 

// let availableRooms = [101, 102, 103, 104];

// // let linesOfHtml = "<select> <option value='101'>101</option> </select>";

// let linesOfHtml = "<select>";
// for (let i = 0; i < availableRooms.length; i++) {
// linesOfHtml = linesOfHtml + `<option value='${availableRooms[i]}'>${availableRooms[i]}</option>`;  
// }
// linesOfHtml = linesOfHtml + "</select>";

// console.log(linesOfHtml);

// document.getElementById('AvailRoomList').innerHTML = linesOfHtml;