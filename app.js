document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMobile = document.querySelector(".navMobile")

  //When cklicing om the the hamburger div the nav bar will unhide and hide
  hamburger.addEventListener("click", () => {
    document.querySelector(".navMobile").classList.toggle("active")
  })

  //When cklicing om the the navMobile div the nav bar will unhide and hide
  navMobile.addEventListener("click", () => {
    document.querySelector(".navMobile").classList.toggle("active")
  })

  // When the user scrolls down, the function will hide the nav bar and when the user scrolls up the function will show the navbar
  let startScrollpos = window.pageYOffset

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (startScrollpos > currentScrollPos) {
      document.getElementById("navBar").style.top = "0"
    } else {
      document.getElementById("navBar").style.top = "-50px"
    }
    startScrollpos = currentScrollPos
  }

  //A function that gets a HTMLcollection, turn it into an array and then loops över it to chnage the styling of all the links in the nav bar for mobile view.
  let mobileNavLinks = document.getElementById("hamburger")

  mobileNavLinks.addEventListener("click", () => {
    let mobileLinks = document.getElementsByClassName("mobileLinks")
    let aTags = Array.from(mobileLinks)

    aTags.forEach((element) => {
      element.style.animation = "scaleUp 2.8s"
    })
  })
})
