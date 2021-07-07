
// bell icon pop up


let bellIcon = document.querySelector(".svg");
let notifications = document.querySelector(".notifications");
let notificationFirst = bellIcon.querySelector(".notification1");
let notificationSecond = bellIcon.querySelector(".notification2");
let notificationFirstX = notificationFirst.querySelector("span");
let notificationSecondX = notificationSecond.querySelector("span");

bellIcon.addEventListener("click", (e) => {
    if (e.target.tagName == "svg") {
        notifications.style.bottom = "-136px";
        notificationFirst.style.display = "flex";
        notificationSecond.style.display = "flex";
        // if (notificationFirst.style.display == "none" || notificationSecond.style.display == "none") {
        //     notifications.style.bottom = "-136px";
        // }
    }
    
    
});

notificationFirstX.addEventListener("click", () => {
    notificationFirst.style.display = "none";
    notifications.style.bottom = "-77px";
    if (notificationFirst.style.display == "none" && notificationSecond.style.display == "none") {
        notifications.style.bottom = "-136px";
    }
});

notificationSecondX.addEventListener("click", () => {
    notificationSecond.style.display = "none";
    notifications.style.bottom = "-80px";
    if (notificationFirst.style.display == "none" && notificationSecond.style.display == "none") {
        notifications.style.bottom = "-136px";
    }
});


// alert message 


let alertMessage = document.querySelector(".alert");
let alertX = document.querySelector(".alert-x");

alertX.addEventListener("click", () => {
    alertMessage.style.display = "none";
});



// search autocomplete


let searchBar = document.getElementById("userField");
let searchUl = document.querySelector(".input-ul");
let user = searchUl.getElementsByTagName("li");
let selectUser = document.querySelector(".widget-container");
let bodyElem = document.querySelector("body");

function removeClass() {
    for (let i = 0; i <= user.length - 1; i++) {
        user[i].classList.remove("show-name");
    }
};

searchBar.addEventListener("click", (e) => {
    for (let i = 0; i <= user.length - 1; i++) {
        if (user[i].textContent.toLowerCase().includes(searchBar.value.toLowerCase())) {
            user[i].classList.add("show-name");
        }
    }
});

bodyElem.addEventListener("click", (e) => {
    if (e.target.tagName != "INPUT") {
    for (let i = 0; i <= user.length - 1; i++) {
            user[i].classList.remove("show-name");
        }
    }
});


searchBar.addEventListener("keyup", () => {
    for (let i = 0; i <= user.length - 1; i++) {
        if (user[i].textContent.toLowerCase().includes(searchBar.value.toLowerCase())) {
            user[i].classList.add("show-name");
        }   else {
            user[i].classList.remove("show-name");
        }
        if (user[i].textContent.toLowerCase() == searchBar.value.toLowerCase()) {
            user[i].classList.remove("show-name");
        }
        if (searchBar.value == "") {
            user[i].classList.remove("show-name");
        }
    }
});

selectUser.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        removeClass();
        searchBar.value = e.target.textContent;
    }
});


// message textarea

// searchBar from above
let sendButton = document.getElementById("send");
let messageField = document.getElementById("messageField");

sendButton.addEventListener("click", () => {
    if (searchBar.value === "" && messageField.value === "") {
        alert("Please fill out user and message fields before sending");
        } else if (searchBar.value === "" ) {
        alert("Please fill out user field before sending");
        } else if (messageField.value === "" ) {
        alert("Please fill out message field before sending");
        } else {
        alert(`Message successfully sent to: ${searchBar.value}`);
        searchBar.value = "";
        messageField.value = "";
        }
});


// local storage 


let settings = document.getElementById("settings");
let switchboxFirst = document.getElementById("switch1");
let  switchboxSecond = document.getElementById("switch2");
let timeZone = document.getElementById("timezone");

settings.addEventListener("click", (e) => {
    if (e.target.id == "save") {
        saveSettings();
    } else if (e.target.id == "cancel") {
        localStorage.clear();
        switchboxFirst.checked = false;
        switchboxSecond.checked = false;
        timeZone.selectedIndex = [0];
    }
});

function savedSettings() {
    let switchFirst = JSON.parse(localStorage.getItem("switch1"));
    let switchSecond = JSON.parse(localStorage.getItem("switch2"));
    let checkTimeZone = JSON.parse(localStorage.getItem("timezone"));
    if (switchFirst) {
        switchboxFirst.checked = switchFirst;
    }
    if (switchSecond) {
        switchboxSecond.checked = switchSecond;
    }
    if (checkTimeZone) {
        timeZone.selectedIndex = checkTimeZone;
    }
}



function saveSettings() {
    localStorage.setItem("switch1", switchboxFirst.checked);
    localStorage.setItem("switch2", switchboxSecond.checked);
    localStorage.setItem("timezone", timeZone.selectedIndex);
};


savedSettings();




