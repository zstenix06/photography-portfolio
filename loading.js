let loaded = false
let enoughTimePassed = false

window.addEventListener("load", function() {
  if (enoughTimePassed) { hidePreloader() }
  loaded = true
})

setTimeout(() => {
  if (loaded) { hidePreloader() }
  enoughTimePassed = true
}, 1000)

function hidePreloader() {
    const loader = document.querySelector(".loader");
   loader.classList.add("loader--hidden");

   loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
   })
}