document.getElementById('dark-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
})

let elMenuBtn = document.getElementById('menuBtn');
let elMenuBox = document.getElementById('menuBox');
let elMenuRemov = document.getElementById('menuRemov')

// elMenuBtn.addEventListener('click', function () {
//   elMenuBox.classList.add('open-menu');
// })

// elMenuRemov.addEventListener('click', function () {
//   elMenuBox.classList.add('menu-remov');
// })

let count = 0;
elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.toggle('open-menu');
  if (count == 0) {
    elMenuBtn.classList = 'open-menu';
    count++;
  }
  else {
    elMenuBox.classList.toggle('menu-remov');
    count = 0;
  }
});


