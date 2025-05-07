const shareSection = document.getElementById("share-section")
const forwardArrowWrapper1 = document.getElementById("forward-arrow-wrapper1")
const forwardArrowWrapper2 = document.getElementById("forward-arrow-wrapper2")
const insetBackground = document.getElementById("inset-background")

console.log(forwardArrowWrapper1)
let isShareBarShowed = false




forwardArrowWrapper1.onclick = () => {
  isShareBarShowed = !isShareBarShowed

  if(isShareBarShowed) {
    console.log("sí, de acuerdo")
    shareSection.classList.remove("hidden")
    insetBackground.classList.remove("hidden")
    return
  }

  shareSection.classList.add("hidden")
}


insetBackground.onclick = () => {
  isShareBarShowed = false
  shareSection.classList.add("hidden")
  insetBackground.classList.add("hidden")
}

forwardArrowWrapper2.onclick = () => {

  isShareBarShowed = false
  shareSection.classList.add("hidden")
  insetBackground.classList.add("hidden")
  
}