// let funnyQuotes = ["Ahh, What's The Point? When I Like Them, They Don't Like Me. When They Like Me, I Don't Like Them. -George Costanza",
//     "You double dipped the chip. You took a bite. And you dipped again. That's like putting your whole mouth right in the dip! From now on, when you take a chip just take one dip and end it! - Timmy",
//     "You're killing independent George! - George Costanza",
//     "Tuesday has no feel. Monday has a feel, Friday has a feel. Sunday has a feel.. - Newman",
//     "The sea was angry that day my friends! Like an old man trying to send back soup at a deli. - George Costanza",
//     "People don't turn down money. It's what separates us from the animals. - Jerry Seinfeld",
//     "Just remember, when you control the mail you control..information! - Newman",
//     "I can't be with someone who doesn't break up nicely. That's an important part of the relationship. - Elaine Benez",
//     "Boy, these pretzels are makin' me thirsty! - Kramer",
//     "What's the deal with lampshades? I mean if it's a lamp, why do you want shade? - Jerry Seinfeld",
//     "Can you die from an odor? I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odor? - Elaine Benez",
//     "You know, I got a great idea for a cologne. 'The Beach'. You spray it on and you smell like you just came home from the beach. - Kramer",
//     "I will never understand the bathrooms in this country. Why is it that the doors on the stalls do not come all the way down to the floor? - George Costanza",
//     "Look, I got a few good years left. If I want a Chip Ahoy, I'm having it. - Morty Seinfeld",
//     "You're through, Soup Nazi. Pack it up. No more soup for you. Next! - Elaine Benez",
//     "Is that a titleist?.. - Kramer"];


// function newQuote() {
//     let randomQuote = Math.floor(Math.random() * funnyQuotes.length);
//     document.getElementById('quotes').innerHTML = funnyQuotes[randomQuote];
// }

const button = document.querySelector('#btn');
const quotes = document.getElementById('quotes');


const randomSeinfeldQuote = async () => {
    try {
        const quote = await fetch("https://seinfeld-quotes.herokuapp.com/random")
        const result = await quote.json();
        quotes.innerHTML = `${result.quote} - ${result.author}`;
    }
    catch (e) {
        quotes.innerHTML = "No quotes today!";
    }
};

button.addEventListener('click', () => { randomSeinfeldQuote() });

// const centralTime = async () => {
//     try {
//         const acpt = { headers: { Accept: 'application/json' } };
//         const result = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=US/Central', acpt);
//         console.log(result);
//         return result;
//     }
//     catch (error) {
//         return "Time Unknown";
//     }
// }

// centralTime();


// fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=US/Central')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




