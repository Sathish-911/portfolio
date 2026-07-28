// Typing Effect

const text = [
    "AI Engineer",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Full Stack Developer",
    "Data Science Learner"
];

let index = 0;
let char = 0;

function type() {

    if (char < text[index].length) {

        document.getElementById("typing").innerHTML += text[index].charAt(char);

        char++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(char>0){

        document.getElementById("typing").innerHTML=text[index].substring(0,char-1);

        char--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index>=text.length){

            index=0;

        }

        setTimeout(type,300);

    }

}

type();

// Mobile Menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

menu.onclick = () => {

    if(nav.style.display==="flex"){

        nav.style.display="none";

    }

    else{

        nav.style.display="flex";
        nav.style.flexDirection="column";

    }

}