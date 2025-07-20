function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("show");
}

    document.addEventListener("DOMContentLoaded", () => {
 if (localStorage.getItem("smartdon-theme") === "dark") {
      document.body.classList.add("dark-mode");}
 });

 //sign-up
 document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
const nameInput =
document.querySelector('input[name="name"]')
document.querySelector('input[name="email"]')
form.addEventListener("submit", () => {

    //save to local storage
  localStorage.setItem("smartdon-name", nameInput.Value.trim());
  localStorage.setItem("smartdon-email", emailInput.Value.trim());
  console.log("Form submitted");
  // Optionally, you can redirect or show a success message
  alert("Form submitted successfully!");
  // Redirect to another page
  window.location.href = "index.html";
} );
} );



 //service.js     
  // Auto scroll left to right
    const container = document.getElementById('designGallery');
    let scrollSpeed = 1;

    function autoScroll() {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth || container.scrollLeft <= 0) {
        scrollSpeed = -scrollSpeed; // reverse scroll direction
      }
      requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // Mouse drag to scroll manually
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      container.scrollLeft = scrollLeft - walk;
    });