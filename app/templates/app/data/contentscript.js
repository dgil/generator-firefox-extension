'use strict';

var notification;

notification = document.createElement('div');
notification.textContent = 'Firefox Extension says: \'Allo \'Allo!';
notification.classList.add('hello-world');

document.body.appendChild(notification);
