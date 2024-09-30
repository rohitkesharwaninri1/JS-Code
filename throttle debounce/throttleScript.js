//debounce
const btn = document.querySelector('.btnIncrement')
const btnPressed = document.querySelector('.btnPressedCount')
const triggerd = document.querySelector('.triggerdCount')

let btnPressedCount = 0;
let triggerdCount = 0;


// Custom debounceFn
const mythrottleFn = (cb, d) => {
    let last = 0;
    
    return (...args)=>{
        let now = new Date().getTime()
        if(now-last < d){
            return
        }
        last = now;
        return cb(...args)
    }
}

const throttleFn = mythrottleFn(()=>{
    triggerdCount += 1
    triggerd.innerHTML = triggerdCount
}, 1000)

// lodash
// const throttleFn = _.throttle(()=>{
//     triggerdCount += 1
//     triggerd.innerHTML = triggerdCount
// }, 1000);

btn.addEventListener("click", ()=>{
    btnPressedCount += 1
    btnPressed.innerHTML = btnPressedCount
    throttleFn()
})

