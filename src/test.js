import string from "./css";
let time = 100


const demo = document.querySelector("#demo")
const demo2 = document.querySelector("#demo2")

const player = {
    id:undefined,
    n:1,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        "#btnClear":"clear",
        "#btnEnd":"end",
    },
    ui:{
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    init:()=>{
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                // 防御性编程 以防有人胡乱修改原型
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    timer:()=>{
        player.n+=1
        if(player.n>string.length) {
            window.clearInterval(player.id)
            return
        }
        demo.innerText = string.substring(0,player.n)
        demo2.innerHTML = string.substring(0,player.n)
        demo.scrollTop = demo.scrollHeight
    },
    play:()=>{
       player.id = setInterval(player.timer,time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        time = 500
        player.play()
    },

    normal:()=>{
        player.pause()
        time = 100
        player.play()
    },

    fast:()=>{
        player.pause()
        time = 0
        player.play()
    },
    clear:()=> {
        player.pause()
        player.ui.demo.innerText = ""
        player.ui.demo2.innerHTML = ""
        player.n = 0
        player.pause()
    },
    end:()=>{
        player.pause()
        player.ui.demo.innerText = string
        player.ui.demo2.innerHTML = string
        player.ui.demo2.scrollTop = 9999
        player.n = string.length
        player.pause()
    }
}

player.init()
