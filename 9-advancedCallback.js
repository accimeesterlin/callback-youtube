
var userData = {
    id: 98709,
    fullName: "Not set",
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}


function getUserInput(firstName, lastName, callback) {
    callback(firstName, lastName);
}

getUserInput('John', 'Patrick', userData.setUserName.bind(userData));

console.log('New Value: ', userData.fullName);

console.log('Window Object Value: ', window.fullName);


















/*
    .bind
    .call
    .apply
*/