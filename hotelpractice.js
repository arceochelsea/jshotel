document.getElementById('hotelname').innerText = "Holiday Inn";
document.getElementById('hotelslogan').innerText = "What chu doing? CHILLIN' AT THE HOLIDAY INN!";

let bookingDetails = {
    typeOfRoom: ['Single', 'Double', 'Queen', 'King'],
    availableRooms: [  [102, 103, 107], [204, 211, 212], [], [456] ],
    bookedRooms: [ [], [], [], [] ],
    checkedOutRooms: [ [], [], [], [] ],

    bookRoom: function () {
        this.bookedRooms[0].push(this.availableRooms[0].pop()); //removing available room from array & pushing it to booked rooms array
        this.updateAvailableRooms(); //call on the next function to update the dropdown
    },

    checkOutRoom: function () {
        this.checkedOutRooms[0].push(this.bookedRooms[0].pop());//removing booked room from array & pushing it to checked out rooms array
        this.updateAvailableRooms(); //call on the next function to update the dropdown
    }, 

    updateAvailableRooms: function () {
        let linesOfHtml = "<select>";
        for (let i = 0; i < this.availableRooms.length; i++) {
        for (let j = 0; j < this.availableRooms[i].length; j++) {
                linesOfHtml = linesOfHtml + `<option value="${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`;
            }
        }
        linesOfHtml = linesOfHtml + "</select>";
        document.getElementById('dropdownavaliablerooms').innerHTML = linesOfHtml;
    }
}

bookingDetails.updateAvailableRooms();
bookingDetails.bookRoom();
bookingDetails.checkOutRoom();