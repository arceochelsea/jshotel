document.getElementById('hotelname').innerText = "Holiday Inn";
document.getElementById('hotelslogan').innerText = "What chu doing? CHILLIN' AT THE HOLIDAY INN!";


let bookButton = document.createElement('button');
bookButton.innerText = 'Book this room!'; //will now display in button
document.body.appendChild(bookButton); // button will be created in html
// document.querySelector('bookDiv').appendChild(bookButton); an attempt to move it to bookDiv div but unsuccessful

let unBookButton = document.createElement('button');
unBookButton.innerText = 'Unbook this room!';
document.body.appendChild(unBookButton);

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
        this.bookedRooms[0].push(this.bookedRooms[0].pop());//removing bookedroom from array & pushing it to availablerooms array
        this.updateUnbookRooms(); //call on the next function to update the dropdown
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
    },

    updateUnbookRooms: function () {
    let linesOfHtmlTwo = "<select>";
    for (let i = 0; i < this.availableRooms.length; i++) {
        for (let j = 0; j < this.availableRooms[i].length; j++) {
            linesOfHtmlTwo = linesOfHtmlTwo + `<option value="${this.bookedRooms[i][j]}">${this.bookedRooms[i][j]}</option>`;
            }
        }
        linesOfHtmlTwo = linesOfHtmlTwo + "</select>";    
        document.getElementById('dropdownbookedrooms').innerHTML = linesOfHtmlTwo;
    },
}

bookingDetails.updateAvailableRooms();
bookingDetails.updateUnbookRooms();
bookingDetails.bookRoom();
bookingDetails.checkOutRoom();