// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animateElements = entry.target.querySelectorAll(".animate-once");
      animateElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animated");
        }, index * 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-section").forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// POPUP FUNCTIONALITY
function setupPopup() {
  const popup = document.getElementById("popup");

  // Fungsi untuk menutup popup
  function closePopup() {
    popup.classList.remove("active");
  }

  // Event listener untuk form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("nama").value;
      const email = document.getElementById("email").value;

      // Update konten popup
      popup.querySelector("h3").textContent = `Terima kasih, ${name}!`;
      popup.querySelector(
        "p"
      ).textContent = `Saya akan menghubungi Anda melalui ${email}`;

      // Tampilkan popup
      popup.classList.add("active");

      // Reset form
      this.reset();
    });

  // Close button
  document.querySelector(".close-btn").addEventListener("click", closePopup);

  // Close ketika klik di luar
  popup.addEventListener("click", function (e) {
    if (e.target === this) closePopup();
  });

  // Close dengan ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopup();
  });
}

// Inisialisasi popup saat DOM siap
document.addEventListener("DOMContentLoaded", setupPopup);
// Efek pembukaan lucu
document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");

  // Animasi emoji berubah-ubah
  const emojis = ["✨", "🎉", "🚀", "👨‍💻", "📷", "🎵"];
  const emojiElement = document.querySelector(".emoji-animation");

  let counter = 0;
  const emojiInterval = setInterval(() => {
    emojiElement.textContent = emojis[counter % emojis.length];
    counter++;
  }, 300);

  // Simulasikan loading
  setTimeout(() => {
    clearInterval(emojiInterval);
    splash.style.opacity = "0";

    // Pesan lucu random sebelum menghilang
    const messages = [
      "Siap untuk melihat karya keren!",
      "Memuat bakat...",
      "Hampir siap!",
      "Bersiaplah terkesima!",
    ];
    document.querySelector(".splash-text").textContent =
      messages[Math.floor(Math.random() * messages.length)];

    setTimeout(() => {
      splash.style.display = "none";
    }, 500);
  }, 2500); // Durasi splash screen (2.5 detik)
});
// Efek Kursor Custom
// Efek Genangan Air
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const cursor = document.getElementById("water-cursor");

  // Aktifkan efek air
  body.classList.add("water-effect");

  // Gerakan kursor utama
  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Buat ripple effect
    createRipple(e.clientX, e.clientY);
  });

  // Fungsi membuat ripple
  function createRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.classList.add("water-ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    // Hapus ripple setelah animasi selesai
    setTimeout(() => {
      ripple.remove();
    }, 900);
  }

  // Efek saat klik (tetesan air lebih besar)
  document.addEventListener("click", function (e) {
    const splash = document.createElement("div");
    splash.classList.add("water-ripple");
    splash.style.left = `${e.clientX}px`;
    splash.style.top = `${e.clientY}px`;
    splash.style.animation = "ripple 1s forwards";
    splash.style.width = "0";
    splash.style.height = "0";
    splash.style.backgroundColor = "rgba(179, 136, 255, 0.4)";

    document.body.appendChild(splash);

    setTimeout(() => {
      splash.remove();
    }, 100);
  });
});
