window.addEventListener('load', () => {
   let sounds= document.querySelectorAll('.sounds')
   let pads=document.querySelectorAll(".pads div")
   let colors=["#60d394","#d36060","#c060d3","#d3d160","#606bd3","#60c2d3"]
   pads.forEach(()=>{
    // pad1
    pads[0].addEventListener('click' , function(){
        sounds[0].currentTime=0
        sounds[0].play()
        let bubble1=document.createElement("div")
        bubble1.className="bubble"
        bubble1.style.backgroundColor=colors[0]
        bubble1.style.animation="jump1 1s ease"
        pads[0].appendChild(bubble1)
        bubble1.addEventListener("animationend", function(){
            pads[0].removeChild(this)
        })
    })
         // pad2
         pads[1].addEventListener('click' , function(){
         sounds[1].currentTime=0
         sounds[1].play()
         let bubble2=document.createElement("div")
            bubble2.className="bubble"
            bubble2.style.backgroundColor=colors[1]
            bubble2.style.animation="jump2 1s ease"
            pads[1].appendChild(bubble2)
            bubble2.addEventListener("animationend", function(){
                pads[1].removeChild(this)
            })
         })
        // pad3
        pads[2].addEventListener('click' , function(){
            sounds[2].currentTime=0
            sounds[2].play()
            let bubble3=document.createElement("div")
            bubble3.className="bubble"
            bubble3.style.backgroundColor=colors[2]
            bubble3.style.animation="jump3 1s ease"
            pads[2].appendChild(bubble3)
            bubble3.addEventListener("animationend", function(){
                pads[2].removeChild(this)
            })
            })
        // pad4
            pads[3].addEventListener('click' , function(){
                sounds[3].currentTime=0
                sounds[3].play()
                let bubble4=document.createElement("div")
                bubble4.className="bubble"
                bubble4.style.backgroundColor=colors[3]
                bubble4.style.animation="jump4 1s ease"
                pads[3].appendChild(bubble4)
                bubble4.addEventListener("animationend", function(){
                    pads[3].removeChild(this)
                })
                })
            // pad5
            pads[4].addEventListener('click' , function(){
                sounds[4].currentTime=0
                sounds[4].play()
                let bubble5=document.createElement("div")
                bubble5.className="bubble"
                bubble5.style.backgroundColor=colors[4]
                bubble5.style.animation="jump5 1s ease"
                pads[4].appendChild(bubble5)
                bubble5.addEventListener("animationend", function(){
                    pads[4].removeChild(this)
                })
                })
            // pad6
            pads[5].addEventListener('click' , function(){
                sounds[5].currentTime=0
                sounds[5].play()
                let bubble6=document.createElement("div")
                bubble6.className="bubble"
                bubble6.style.backgroundColor=colors[5]
                bubble6.style.animation="jump6 1s ease"
                pads[5].appendChild(bubble6)
                bubble6.addEventListener("animationend", function(){
                    pads[5].removeChild(this)
                })
                })
   })
})