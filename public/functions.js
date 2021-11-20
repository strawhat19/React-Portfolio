console.log('Hey there, welcome to my website.');

window.addEventListener('DOMContentLoaded', (event) => {
  var animation = bodymovin.loadAnimation({
    container: document.querySelector('#animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './react.json'
  })
})