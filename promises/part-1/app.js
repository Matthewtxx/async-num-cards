//let favNumber = 5;
let baseUrl = "http://numbersapi.com";

//1
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
})

//2
let favNumber = [7,11,22];
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
})

//3
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append('<p>${data.text}</p>'));
});