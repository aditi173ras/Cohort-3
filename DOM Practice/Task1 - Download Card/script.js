const btn = document.querySelector('button')
const h2 = document.querySelector('h2')
const divInner = document.querySelector('.inner')
const p2 = document.querySelector('#p2')

btn.addEventListener('click', ()=>{
    let num = 25 + Math.floor(Math.random() * 50)

    btn.style.pointerEvents = 'none'
    p2.innerHTML = `Your file is downloaded in ${num/10} seconds.`
    let grow = 0
    const int = setInterval(()=>{
        grow++
        h2.innerHTML = grow + '%'
        divInner.style.width = grow + '%'
    },num)

    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = 'Download again'
        p2.innerHTML = `Your file is downloaded in ${num/10} seconds.`
        p2.style.color = 'blue'
        btn.style.pointerEvents = 'auto'
    },num*100)
})