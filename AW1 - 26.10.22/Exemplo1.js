let counter = 0

let res = document.querySelector('section#result')

// Variables declared out here are considered GLOBAL and work within the entire program

function count() {
    counter++ // It's the same thing as counter = counter + 1
    
    res.innerHTML = `<p>The counter is at <mark>${counter}</mark> clicks.</p>`
}

function zerar()
{
    counter = 0;
    res.innerHTML = null;
}

