const tabList = document.querySelectorAll(".navbar__menu li");
const content = document.querySelectorAll(".contents .content");
let active = "";

console.log("fini");
for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    if (document.readyState === "complete") {
      e.preventDefault();
      for (var j = 0; j < content.length; j++) {
        tabList[j].classList.remove("active");
        content[j].style.display = "none";
      }
      this.parentNode.classList.add("active");
      active = this.getAttribute("href");
      document.querySelector(active).style.display = "block";
    }
  });
}
