function updateNames() {
    localStorage.setItem('name1', document.getElementById('fName').value);
    document.getElementById('firstName').innerText = localStorage.getItem('name1');

    localStorage.setItem('name2', document.getElementById('lName').value);
    document.getElementById('lastName').innerText = localStorage.getItem('name2');
} //this is triggered by the button

document.getElementById('firstName').innerText = localStorage.getItem('name1');
document.getElementById('lastName').innerText = localStorage.getItem('name2');