const body = document.getElementById('body')
const img = document.getElementById('img')

const prevBtn = document.getElementById('perv')
const nextBtn = document.getElementById('next')

let imgNum = 1
prevBtn.addEventListener('click', ()=>{
  imgNum = imgNum == 1 ? 8 : imgNum-=1
  let nextImg = imgNum == 8 ? 1 : imgNum+1
  body.style.backgroundImage = `url("./images/pic-${nextImg}.jpg")`
  img.src=`./images/pic-${imgNum}.jpg`
})

nextBtn.addEventListener('click', ()=>{
  imgNum = imgNum == 8 ? 1 : imgNum += 1
  let nextImg = imgNum == 8 ? 1 : imgNum+1
  body.style.backgroundImage = `url("./images/pic-${nextImg}.jpg")` 
  img.src=`./images/pic-${imgNum}.jpg`
})