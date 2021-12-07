let backscene = document.getElementById("backscene")
let cat = document.getElementById("cat")
leftPos = 0
rightPos = 0
let katzeLauf
function catWalk(){
    let animationWalk = () => {
        leftPos += 10
        console.log("Cat goes meow")
        cat.style.left = `${leftPos}px`
        cat.style.transform = "scaleX(1)"
        console.log(leftPos)
        if(leftPos >= window.innerWidth-cat.width){
            turn()
            clearInterval(katzeLauf)
            clearInterval(katzeLauf3)
        }
    }   
    katzeLauf = setInterval(animationWalk, 100)
}
let katzelauf2
function turn(){
    let animationWalk = () => {
        leftPos -= 10
        console.log("Cat goes brrrrr")
        cat.style.left = `${leftPos}px`
        cat.style.transform = "scaleX(-1)"
        if(leftPos == 0){
            catWalk()
            clearInterval(katzelauf2)
            clearInterval(katzeLauf3)
        }
    }
    katzelauf2 = setInterval(animationWalk, 100)
}

function catSpeed(){
    clearInterval(katzeLauf)
    clearInterval(katzelauf2)
        let animationWalk = () => {
            leftPos += 10
            console.log("Cat goes meow")
            cat.style.left = `${leftPos}px`
            cat.style.transform = "scaleX(1)"
            console.log(leftPos)
            if(leftPos >= window.innerWidth-cat.width){
                turn()
                clearInterval(katzeLauf)
            }
        }   
        katzeLauf3 = setInterval(animationWalk, 10)
}

let pause = () => {
    clearInterval(katzeLauf)
    clearInterval(katzelauf2)
    clearInterval(katzeLauf3)
}

console.log(window.innerWidth)
console.log(cat.width)
test()
function test(){
    console.log("test-function")
}
