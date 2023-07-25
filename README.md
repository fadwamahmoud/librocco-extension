## How to test the extension

 - Navigate to chrome://extensions/
 - Enable developer mode
 - Click Load Unpacked
 - select the src folder of your extension to load it up
 - Start librocco client app
 - add this line to the load fn in +layout.ts*:  
 `window.postMessage({ type: "FROM_PAGE", isbn: "9781338878929" })` 
 - results should be logged in the console
 
 \* (this is just for experimenting purposes but when we wire this up it should be moved to the function that adds the book or smth)