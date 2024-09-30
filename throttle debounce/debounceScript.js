//debounce
const btn = document.querySelector('.btnIncrement')
const btnPressed = document.querySelector('.btnPressedCount')
const triggerd = document.querySelector('.triggerdCount')

let btnPressedCount = 0;
let triggerdCount = 0;

// Custom debounceFn
const myDebounceFn = (cb, d) =>{
    let timer;
    return (...arg) =>{
        if(timer){
            clearInterval(timer);
        }
        timer = setTimeout(()=>{
            cb(...arg);
        }, d)
    }
}
const debounceFn = myDebounceFn(()=>{
    triggerdCount += 1
    triggerd.innerHTML = triggerdCount
}, 1000)

// Lodash
// const debounceFn = _.debounce(()=>{
//     triggerdCount += 1
//     triggerd.innerHTML = triggerdCount
// }, 1000);

btn.addEventListener("click", ()=>{
    btnPressedCount += 1
    btnPressed.innerHTML = btnPressedCount
    debounceFn()
})

