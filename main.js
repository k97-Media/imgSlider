const body = document.getElementById('body')
const img = document.getElementById('img')

const prevBtn = document.getElementById('perv')
const nextBtn = document.getElementById('next')

let imgNum = 1
nextBtn.addEventListener('click', () => {
	if(imgNum == 8){
		imgNum = 1
	}
	else{
		imgNum+=1
	}
	let nexImg = 1
	if(imgNum == 8){
		nextImg = 1
	}
	else{
		nextImg = imgNum+1
	}

	body.style.backgroundImage = `url("./images/pic-${nextImg}.jpg")`
	img.src=`./images/pic-${imgNum}.jpg`
})

prevBtn.addEventListener('click', ()=>{
	if(imgNum == 1){
		imgNum = 8
	}
	else{
		imgNum-=1
	}
	let nexImg = 1
	if(imgNum == 8){
		nextImg = 1
	}
	else{
		nextImg = imgNum+1
	}

	body.style.backgroundImage = `url("./images/pic-${nextImg}.jpg")`
	img.src=`./images/pic-${imgNum}.jpg`
})
