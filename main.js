const btn = document.querySelector('.quote-btn');
const output = document.querySelector('.qoute-output');
let quote = [
    `"I'm as mad as hell, and I'm not going to take this anymore!" - Network, 1976`,
    `"Love means never having to say you're sorry." - Love Story, 1970`,
    `"Louis, I think this is the beginning of a beautiful friendship." - Casablanca, 1942`,
    `"Bond. James Bond." - Dr. No, 1962`,
    `"There's no place like home." - The Wizard of Oz, 1939`,
    `"After all, tomorrow is another day!" - Gone With the Wind, 1939`,
];

btn.addEventListener('click', function () {
    let randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
});
