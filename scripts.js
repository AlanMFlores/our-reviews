const reviews = [
    {
        id : 1,
        name : 'susan smith',
        job : 'web developer',
        img : 'img/person2.jpg',
        text: "Donec orci lorem, ornare non felis ut, blandit consequat arcu. Suspendisse sit amet sagittis urna. Sed ut tincidunt massa. Donec in neque metus. Morbi nec fermentum felis. Vestibulum rhoncus est quis nulla rutrum venenatis. "
    },
    {
        id : 2,
        name : 'anna johnson',
        job : 'web designer',
        img : 'img/person3.jpg',
        text: " Aliquam ut porta felis. Ut aliquam non mi eu fermentum. Nullam tempus pharetra libero, id rutrum leo. Nulla eget tortor non risus porttitor euismod. Nulla tincidunt nec nisl vitae sollicitudin."
    },
    {
        id : 3,
        name : 'peter jones',
        job : 'intern',
        img : 'img/person5.jpg',
        text: "Nam ligula nunc, facilisis nec lacus nec, bibendum consequat nulla. Nullam id neque blandit, volutpat eros at, posuere est. Vivamus imperdiet augue eget ex efficitur bibendum. Etiam justo odio, tempor eget risus."
    },
    {
        id : 4,
        name : 'bill anderson',
        job : 'the boss',
        img : 'img/person4.jpg',
        text: "Integer interdum a libero non sodales. Nunc efficitur nulla at libero placerat tristique. Nulla et massa dapibus, aliquam tellus in, dapibus quam. Duis a velit in lectus tincidunt sodales quis eu augue. Curabitur."
    }
];

// Select items

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

// Select buttons

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')

// Set starting item

let currentItem = 0;

// Load initial item

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
})

const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// Show prev person

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})

