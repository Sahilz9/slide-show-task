let mainContainer = document.querySelector("#maincontainer");
let container = document.createElement("div");
mainContainer.appendChild(container);

const data = [
  "https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let index = 0;
let id;

let showSlide = (index) => {
  container.innerHTML = "";
  let img = document.createElement("img");
  img.className = "images";
  img.src = data[index];
  container.append(img);
};

let nextSlide = () => {
  index++;
  if (index >= data.length) {
    index = 0;
  }
  showSlide(index);
};

let prevSlide = () => {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  showSlide(index);
};

let slideShow = () => {
  id = setInterval(() => {
    nextSlide();
  }, 2000);
};

document.querySelector("#nextBtn").addEventListener("click", () => {
  clearInterval(id);
  nextSlide();
  slideShow();
});

document.querySelector("#prevBtn").addEventListener("click", () => {
  clearInterval(id);
  prevSlide();
  slideShow();
});

showSlide(index);
slideShow();
