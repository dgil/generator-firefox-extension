var data = require("sdk/self").data;

// Construct a panel, loading its content from the "popup.html"
// file in the "data" directory
var popup = require("sdk/panel").Panel({
    contentURL: data.url("popup.html")
});

// Create a button
require("sdk/ui/button/action").ActionButton({
    id: "show-panel",
    label: "Show Panel",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

// Show the panel when user clicks the button.
function handleClick(state) {
    popup.show();
}
