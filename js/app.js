const shareSection = document.getElementById("share-section")
const forwardArrowWrapper1 = document.getElementById("forward-arrow-wrapper1")
const forwardArrowWrapper2 = document.getElementById("forward-arrow-wrapper2")


console.log(forwardArrowWrapper1)
let isShareBarShowed = false


window.onresize = () => {
  isShareBarShowed = false
  shareSection.classList.add("hidden")
}


forwardArrowWrapper1.onclick = () => {
  isShareBarShowed = !isShareBarShowed

  if(isShareBarShowed) {
    shareSection.classList.remove("hidden")
    return
  }

  shareSection.classList.add("hidden")
}

forwardArrowWrapper2.onclick = () => {

  isShareBarShowed = false
  shareSection.classList.add("hidden")
}