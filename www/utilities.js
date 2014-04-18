var exec = require('cordova/exec');

/*
function Utilities() {}

Utilities.prototype.isAddressBookAuthed = function(successCallback)
{
    exec(successCallback, null, "Utilities", "isAddressBookAuthed", []);
};

module.exports = new Utilities();
*/

var Utilities = {
    isAddressBookAuthed: function(successCallback) {
        var callbackWrapper = function (result) {
            successCallback(result == '1');
        };
        exec(callbackWrapper, null, "Utilities", "isAddressBookAuthed", []);
    }
};

module.exports = Utilities;
