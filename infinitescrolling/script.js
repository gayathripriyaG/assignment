let container = document.getElementById("container")
let itemCount = 1
function initialNumber(numpage = 25) {
  let i = 1
  while (i <= numpage) {
    let h1 = document.createElement("h1")
    h1.className = "boxing"
    h1.innerText = `Item ${itemCount}`
    container.append(h1)
    i++
    itemCount++
  }
}
initialNumber()
window.addEventListener("scroll", () => {
  console.log(
    window.scrollY,
    window.innerHeight,
    document.documentElement.scrollHeight
  )
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    initialNumber()
  }
})