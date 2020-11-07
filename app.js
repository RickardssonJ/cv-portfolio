document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  //const navMobile = document.getElementById("navMobile")
  const navMobile = document.querySelector(".navMobile")

  hamburger.addEventListener("click", () => {
    //document.getElementById("navMobile").classList.toggle("active")
    document.querySelector(".navMobile").classList.toggle("active")
  })

  navMobile.addEventListener("click", () => {
    // document.getElementById("navMobile").classList.toggle("active")
    document.querySelector(".navMobile").classList.toggle("active")
  })
})
