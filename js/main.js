document.getElementById('dark-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
})

let elMenuBtn = document.getElementById('menuBtn');
let elMenuBox = document.getElementById('menuBox');
let elMenuRemov = document.getElementById('menuRemov')

elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.add('open-menu');
})

elMenuRemov.addEventListener('click', function () {
  elMenuBox.classList.add('menu-remov');
})



