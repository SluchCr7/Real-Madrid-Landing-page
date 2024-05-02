let card = document.getElementById("card");
let Match = document.querySelectorAll(".Match");

let closeicon = document.getElementById("closeicon")


Match.forEach((el) => {
    el.addEventListener("click", (e) => {
        // console.log(e.currentTarget.children[1].children[1].firstChild.textContent);
        document.body.innerHTML += `
            <div class="cardMatch" id="card">
                <i class="fa-solid fa-x iconclose" id="closeicon"></i>
                <span class="title">Match Details</span>
                <div class="top_details">
                    <img src="${e.currentTarget.children[0].children[0].src}" alt="">
                    <div class="scoore">
                        <p>${e.currentTarget.children[0].children[1].textContent}</p>
                    </div>
                    <img src="${e.currentTarget.children[0].children[2].src}" alt="">
                </div>
                <div class="bottom_details">
                    <div class="detail">
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <i class="material-icons">emoji_events</i>
                        <span class="staduim">${e.currentTarget.children[1].children[2].textContent}</span>
                    </div>
                    <div class="detail">
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <i class="material-icons">location_on</i>
                        <span class="staduim">${e.currentTarget.children[1].children[0].textContent}</span>
                    </div>
                    <div class="detail">
                        <!-- <i class="fa-solid fa-calendar"></i> -->
                        <i class="material-icons">schedule</i>
                        <!-- <i class="fa-solid fa-clock"></i> -->
                        <span class="data">${e.currentTarget.children[1].children[1].firstChild.textContent}</span>
                    </div>
                    <div class="detail">
                        <i class="material-icons">timer</i>
                        <span class="time">${e.currentTarget.children[1].children[1].children[0].textContent}</span>
                    </div>
                    <div class="detail">
                        <i class="material-icons">sports</i>
                        <span class="referre">Clément Turpin</span>
                    </div>
                </div>
            </div>
        `
        document.getElementById("closeicon").addEventListener("click", () => {
            document.getElementById("card").remove()
        })
    })
})



// console.log("heelo")

let toggle = document.getElementById("toggle")
let circle = document.getElementById("circle")

toggle.addEventListener("click", () => {
    if (circle.classList.contains("left")) {
        circle.classList.remove("left")
        circle.classList.add("right")
    }
    else {
        circle.classList.add("left")
        circle.classList.remove("right")
    }
})

let players = document.getElementById("players")
let arrcards = [];
fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        players.innerHTML = ""
        for (let i = 0; i < 4; i++) {
            // arrcards.push(data[i].name)
            let contcard = `
                <div class="player">
                    <div class="img">
                        <img src="${data[i].image}" alt="">
                    </div>
                    <div class="details">
                        <span class="name">${data[i].name}</span>
                        <span class="num">${data[i].number}</span>
                        <img src="${data[i].country}" class="country" alt="">
                    </div>
                </div>
            
            `
            players.innerHTML += contcard
            arrcards.push(contcard)
            // console.log(arrcards)
    }
})

let close = document.getElementById("close")
let arrow = document.getElementById("up")

// console.log(arrcards[0])

arrow.addEventListener("click", () => {
    if (arrow.classList.contains("fa-arrow-up")) {
        // players.innerHTML.charAt(players.innerHTML.length - 1)
        // console.log(players.innerHTML.slice(0, arrcards.length - 1).join(""))
        players.innerHTML = arrcards.slice(0, 4).join("")
        arrow.classList.remove("fa-arrow-up")
        arrow.classList.add("fa-arrow-down")
    }
    else {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data[0])
                players.innerHTML = ""
                for (let i = 0; i < data.length; i++) {
                    // arrcards.push(data[i].name)
                    let contcard = `
                        <div class="player">
                            <div class="img">
                                <img src="${data[i].image}" alt="">
                            </div>
                            <div class="details">
                                <span class="name">${data[i].name}</span>
                                <span class="num">${data[i].number}</span>
                                <img src="${data[i].country}" class="country" alt="">
                            </div>
                        </div>
                    
                    `
                    players.innerHTML += contcard
                    arrcards.push(contcard)
                    // console.log(arrcards)
            }
        })
        arrow.classList.remove("fa-arrow-down")
        arrow.classList.add("fa-arrow-up")
    }
})


// Dark Mode

const isDarkMode = localStorage.getItem("darkMode") == "true";

if(isDarkMode){
    toggleDarkMode();
}

function toggleDarkMode(){
    document.body.classList.add("dark_mode");
    // circle.classList.toggle("right");
    localStorage.setItem("darkMode", "true");
}
function removeDarkMode(){
    document.body.classList.remove("dark_mode");
    // circle.classList.remove("right");
    localStorage.setItem("darkMode", "false");
}

toggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark_mode"))  {
        circle.classList.add("left");
        circle.classList.remove("right");
        removeDarkMode();
    }
    else {
        circle.classList.remove("left");
        circle.classList.add("right");
        toggleDarkMode();
    }
});