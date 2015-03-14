'use strict';

var data = require('sdk/self').data;<% if (contentscript) { %>
var pageMod = require('sdk/page-mod');<% } if (popup) { %>
var popup = require('sdk/panel').Panel({
    contentURL: data.url('popup.html')
});

// Show the popup when the user clicks the button.
function handleClick() {
    popup.show();
}<% } %>

// Create a button
require('sdk/ui/button/action').ActionButton({
    id: 'show-popup',
    label: '<%= title %>',
    icon: {
        '16': './icon-16.png',
        '32': './icon-32.png',
        '64': './icon-64.png'
    }<% if (popup) { %>,
    onClick: handleClick
    <% } %>
});
<% if (contentscript) { %>
// Content script injection
pageMod.PageMod({
    include: ['*'], // all urls
    contentScriptFile: [data.url('contentscript.js')],
    contentStyleFile: [data.url('contentstyle.css')]
});
<% } %>
