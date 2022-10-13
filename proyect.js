
let btn = document.querySelector(".new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [
    {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`
    },
    {
        quote: `"If you change the way you look at things, the things you look at change."`,
        person: `Wayne Dyer`
    },
    {
        quote: `"For the great doesn't happen through impulse alone, and is a succession of little things that are brought together."`,
        person: `Vincent Van Gogh`
    },
    {
        quote: `"You have succeeded in life when all you really want is only what you really need."`,
        person: `Vernon Howard`
    },
    {
        quote: `"Believe you can and you're halfway there."`,
        person: `Theodore Roosevelt`
    },
    {
        quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: `Robert Louis Stevenson`
    },
    {
        quote: `"Three things in life - your health, your mission, and the people you love. That's it."`,
        person: `Naval Ravikant`
    },
    {
        quote: `"Difficult and meaningful will always bring more satisfaction than easy and meaningless."`,
        person: `Maxime Legacé`
    },
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;


    console.log(quotes[random].quote);
})