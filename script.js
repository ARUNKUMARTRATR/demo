// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #eea94a;
    border: none;
    color: #1a1a1a;
    cursor: pointer;
    font-size: 1.2rem;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "scale(1.1)";
});

scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "scale(1)";
});
