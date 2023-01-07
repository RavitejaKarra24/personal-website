//storing the information in the object
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    }, 
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    }
];

//select items
let image = document.querySelector("img");
let full_name = document.getElementById("name");
let job = document.getElementById("job");
let info = document.getElementById("info");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.getElementById("random-btn");

//set starting item
let currentItem = 0;
image.src = reviews[currentItem].img;
full_name.textContent = reviews[currentItem].name.toUpperCase();
job.textContent = reviews[currentItem].job;
info.textContent = reviews[currentItem].text;

nextBtn.addEventListener("click", function(){
    console.log("next btn clicked");
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    image.src = reviews[currentItem].img;
    full_name.textContent = reviews[currentItem].name.toUpperCase();
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
}
);

prevBtn.addEventListener("click", function(){
    console.log("pre btn clicked");
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    image.src = reviews[currentItem].img;
    full_name.textContent = reviews[currentItem].name.toUpperCase();
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
}
);

randomBtn.addEventListener("click", function(){
    console.log("suprise btn clicked");
    currentItem = Math.floor(Math.random() * reviews.length);
    image.src = reviews[currentItem].img;
    full_name.textContent = reviews[currentItem].name.toUpperCase();
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
}
);




