const btnClose = document.querySelector('.btn_close');
const modal = document.querySelector('.modal_content');
const overlay = document.querySelector('.overlay');
const APILink = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const gallery = document.querySelector('.gallery');
const search = document.getElementById('search');
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
let names = document.getElementsByClassName("full_name");
let card = document.getElementsByClassName("card");
let employees = [];


function getData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err))
}
  getData(APILink)
    .then(data => getEmployees(data))
  const getEmployees = data => {
    employees = data;
    gallery.innerHTML = employees.map((employee, index) => {
      const {name, email, location, picture} = employee;
      return `<div class="card" index=${index}>
              <img src=${picture.large}  alt="${name.first} profile"/>
                  <div class="info">
                      <h3 class="full_name">${name.first} ${name.last}</h3>
                      <p>${email}</p>
                      <p>${location.city}</p>
                  </div>
              </div>`;
    })
    .join('')
  };

const showModal = (i) => {
  const { name, dob, phone, email, location = {city, street, state, postcode}, picture} = employees[i];
  let date = new Date(dob.date);
  let currDate = date.getDate()
  currDate = currDate > 9 ? currDate : "0" + currDate;
  let currMonth = date.getMonth();
  currMonth = currMonth > 9 ? currMonth : "0" + currMonth;
  let currYear = date.getFullYear()
  let formattedDate = `${currMonth}/${currDate}/${currYear}`
  let HTML = '';
  HTML += `
    <div class="info">
      <img src=${picture.large} alt="${name.first}">
      <div class="text-info">
        <h3 class="full_name">${name.first} ${name.last}</h3>
        <p>${email}</p>
        <p class="city">${location.city}</p>
        <p>${phone}</p>
        <p>${location.street.number} ${location.street.name}, ${location.state} ${location.postcode}</p>
       <p>Birthday: ${formattedDate} </p>
    </div>
  </div>`
  overlay.classList.remove("hide");
  modal.innerHTML = HTML; 
  btnNext.addEventListener('click', () => showNextEmployee(i));
  btnPrev.addEventListener('click', () => showPrevEmployee(i));
};

function showPrevEmployee(index) {
  index -= 1;
  if (index > -1) {
      showModal(index);

  } else {
      showModal(11);
  }
};

function showNextEmployee(index) {
  index += 1;
  if (index < 12) {
      showModal(index);

  } else {
      showModal(0);
  }
};

gallery.addEventListener('click', e => {
if (e.target !== gallery) {
  const card = e.target.closest(".card");
  const string = card.getAttribute("index");
  const index = parseInt(string);
  showModal(index); 
}
});

btnClose.addEventListener("click", () => {
overlay.classList.add("hide");
});

search.addEventListener('keyup', () => {
  for (let i = 0; i < card.length; i++) {
    let person = names[i];
    if (person.textContent.toLowerCase().includes(search.value.toLowerCase())) { 
      card[i].style.display ="flex";
    } else {
      card[i].style.display = "none";
    }
  }
}); 
