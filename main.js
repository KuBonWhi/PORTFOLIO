const tabList = document.querySelectorAll(".navbar__menu li");
const content = document.querySelectorAll(".contents .content");
let active = "";
let num = 0;

for (let i = 0; i < tabList.length; i++) {
  const tabListA = tabList[i].querySelectorAll("a");

  tabListA[0].addEventListener("click", function (e) {
    if (document.readyState === "complete") {
      e.preventDefault();
      for (let j = 0; j < content.length; j++) {
        tabList[j].classList.remove("active");
        content[j].style.display = "none";
      }
      this.parentNode.classList.add("active");
      active = this.getAttribute("href");
      document.querySelector(active).style.display = "block";
    }
  });
  tabListA[1].addEventListener("click", function (e) {
    if (document.readyState === "complete") {
      e.preventDefault();
      for (let j = 0; j < content.length; j++) {
        tabList[j].classList.remove("active");
        content[j].style.display = "none";
      }
      this.parentNode.classList.add("active");
      active = this.getAttribute("href");
      document.querySelector(active).style.display = "block";
    }
  });
}

// projects

const workBtnContainer = document.querySelectorAll(".work__categories button");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");


for(let i=0;i<workBtnContainer.length;i++){
workBtnContainer[i].addEventListener("click", (e) => {

  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter===null) {
    return;
  }

  const active = document.querySelector(".category__btn.active");
  active.classList.remove('active');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('active');

  projectContainer.classList.add('anim-out');
  
  setTimeout(()=>{
    projects.forEach((project)=>{
      if(filter==='*'|| filter=== project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
}