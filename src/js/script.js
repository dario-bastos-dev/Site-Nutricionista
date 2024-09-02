const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("animate");
    else entry.target.classList.remove("animate");
  });
});

const sections = document.querySelectorAll("section, header, footer, .copy");

sections.forEach((sec) => observer.observe(sec));
