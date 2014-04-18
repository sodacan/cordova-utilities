#import "Utilities.h"
#import <AddressBook/AddressBook.h>

@implementation Utilities

- (void)isAddressBookAuthed:(CDVInvokedUrlCommand *)command
{
    BOOL isAuthed = NO;
    if (ABAddressBookGetAuthorizationStatus == NULL)
    {
        // < iOS 6
        isAuthed = YES;
    }
    else
    {
        // iOS 6+
        isAuthed = (ABAddressBookGetAuthorizationStatus() == kABAuthorizationStatusAuthorized);
    }

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:(isAuthed ? @"1" : @"0")];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
