'use strict';

document.body.querySelectorAll('*').forEach((e) => {
    if(e.innerText && e.innerText.match(/Founded/)) {
        e.innerText = e.innerText.replace(/Founded/, 'oh boy')
    }
})
