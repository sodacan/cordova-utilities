var exec = require('cordova/exec');

/*
function Utilities() {}

Utilities.prototype.isAddressBookAuthed = function(successCallback, failureCallback)
{
    exec(successCallback, failureCallback, "Utilities", "isAddressBookAuthed", []);
};
*/

var Utilities =
{
    isAddressBookAuthed: function(successCallback, failureCallback)
    {
        exec(successCallback, failureCallback, "Utilities", "isAddressBookAuthed", []);
    }
};

module.exports = new Utilities();
