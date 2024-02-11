const all = document.querySelectorAll(".card");
const updates = [];

window.addEventListener("mousemove", (ev) => {
  all.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";

    updates.push({
      element: blob,
      transform: `translate(${ev.clientX - rec.left - rec.width / 2}px, ${ev.clientY - rec.top - rec.height / 2}px)`,
    });
  });

  // Batch update
  requestAnimationFrame(() => {
    updates.forEach(({ element, transform }) => {
      element.animate(
        [
          {
            transform,
          },
        ],
        {
          duration: 300,
          fill: "forwards",
        }
      );
    });

    updates.length = 0; // Clear updates
  });
});

const nav = document.querySelector("nav");
const navHeight = nav.offsetHeight;
const footer = document.querySelector("footer") 


if (nav) {
  footer.style.height = navHeight + "px";
}
console.log(nav)
console.log(navHeight)
console.log(footer) 