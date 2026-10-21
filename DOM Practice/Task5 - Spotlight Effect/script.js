const main = document.querySelector("main");
main.addEventListener('mousemove', (elem)=>{
    main.style.setProperty('--x', elem.clientX + 'px')
    main.style.setProperty('--y', elem.clientY + 'px')
})

const h1 = document.querySelector('h1')
const text = h1.innerText
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let i=0
let interval

function textGenerate(){
    let str = text.split('').map((char, index)=>{
        if(index < i){
            return char
        }

        return alpha.split('')[Math.floor(Math.random()*53)]
    }).join('')
    h1.innerText = str

    i+=0.5

    if (i >= text.length) {
    clearInterval(interval);
    h1.innerText = text;
  }
}

h1.addEventListener("mouseenter", () => {
  // Reset for a new animation
  i = 0;

  // Make sure an old interval isn't running
  clearInterval(interval);

  interval = setInterval(textGenerate, 30);
});
