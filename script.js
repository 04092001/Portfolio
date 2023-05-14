function scrollToTop() {
  var section = document.querySelector(".body");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  var section = document.querySelector(".about-me");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
  var section = document.querySelector(".projects");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  var section = document.querySelector(".footer");
  section.scrollIntoView({ behavior: "smooth" });
}
