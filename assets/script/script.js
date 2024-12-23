//Animasi coretan cursor
document.addEventListener("mousemove", (e) => {
    // Buat elemen coretan
    const streak = document.createElement("div");
    streak.classList.add("cursor-streak");

    // Tentukan posisi coretan
    streak.style.left = `${e.clientX}px`;
    streak.style.top = `${e.clientY}px`;

    // Tambahkan coretan ke body
    document.body.appendChild(streak);

    // Hapus coretan setelah animasi selesai
    streak.addEventListener("animationend", () => {
        streak.remove();
    });
});

//Animasi overlay ngetik
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const typingContainer = document.getElementById("typing-container");
    const text = "Welcome To My Page"; // Teks yang akan diketik
    let index = 0;
  
    // Fungsi untuk mengetik karakter satu per satu
    function typeText() {
      if (index < text.length) {
        typingContainer.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200); // Kecepatan mengetik (200ms per karakter)
      } else {
        // Setelah selesai mengetik, tunggu 2 detik dan sembunyikan overlay
        setTimeout(() => {
          overlay.classList.add("hidden");
        }, 2000);
      }
    }
  
    typeText();
  });
  
//Animasi fade-up
AOS.init({
    easing: 'ease-in-out',
    duration: 2000,
    once: false,
});

//Fitur Burger Bar
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
});
  
//Fitur Image Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0;
let autoSlideInterval;


function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index; 
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}


function nextSlide() {
    showSlides(currentIndex + 1);
}


function prevSlide() {
    showSlides(currentIndex - 1);
}


function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); 
}


function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


sliderContainer.addEventListener('mouseover', stopAutoSlide);


sliderContainer.addEventListener('mouseout', startAutoSlide);


startAutoSlide();

// Fitur button Translate
document.getElementById('en-btn').addEventListener('click', function() {
    setLanguage('en');
});

document.getElementById('id-btn').addEventListener('click', function() {
    setLanguage('id');
});

function setLanguage(lang) {
    // Mengubah teks button berdasarkan bahasa yang dipilih
    if (lang === 'en') {
        document.getElementById('en-btn').textContent = 'EN';
        document.getElementById('id-btn').textContent = 'IN';
        // Lakukan tindakan lain untuk mengubah halaman ke bahasa Inggris
    } else if (lang === 'id') {
        document.getElementById('en-btn').textContent = 'EN';
        document.getElementById('id-btn').textContent = 'IN';
        // Lakukan tindakan lain untuk mengubah halaman ke bahasa Indonesia
    }
    const enBtn = document.getElementById('en-btn');
    const idBtn = document.getElementById('id-btn');
    
    // Logika untuk memberikan border pada tombol aktif
    if (lang === 'en') {
        enBtn.classList.add('active');
        idBtn.classList.remove('active'); 
    } else if (lang === 'id'){
        idBtn.classList.add('active');
        enBtn.classList.remove('active'); 
    }

}

//Fitur Translate bahasa
document.addEventListener("DOMContentLoaded", () => {
    const langToggleButtons = document.querySelectorAll("#language-toggle button");
    const langFiles = {
        en: "/assets/lang/en.json",
        id: "/assets/lang/id.json"
    };
    let currentLanguage = "en";

    // Fungsi untuk memuat file JSON bahasa
    const loadLanguage = (lang) => {
        fetch(langFiles[lang])
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((translations) => updateContent(translations))
            .catch((error) => console.error("Error loading language file:", error));
    };

    // Fungsi untuk memperbarui konten berdasarkan JSON bahasa
    const updateContent = (translations) => {
        // Perbarui judul halaman
        document.title = translations.title;

        // Perbarui navigasi
        const navLinks = document.querySelectorAll("nav ul li a");
        Object.keys(translations.menu).forEach((key, index) => {
            if (navLinks[index]) {
                navLinks[index].textContent = translations.menu[key];
            }
        });

        // Perbarui bagian home
        const home = translations.home;
        if (home) {
            document.querySelector("#home h1").textContent = home.greeting;
            document.querySelector("#home h2").textContent = home.job;
            document.querySelector("#home p").textContent = home.description;
            document.querySelector("#home #button-cv").textContent = home.button;
        }

        // Perbarui bagian about
        const about = translations.about;
        if (about) {
            document.querySelector("#about h1").textContent = about.title;
            document.querySelector("#about-info p").textContent = about.description;
        }

        // Perbarui bagian skill
        const skill = translations.skill;
        if (skill) {
            document.querySelector("#skill h1").textContent = skill.title;
        }

        // Perbarui bagian project
        const project = translations.project;
        if (project) {
            document.querySelector("#project h1").textContent = project.title;
            const ecommerce = project.ecommerce;
            if (ecommerce) {
                document.querySelector("#project .project-info .project-isi h2").textContent = ecommerce.title;
                document.querySelector("#project .project-info .project-isi p").textContent = ecommerce.description;
                document.querySelector("#project .project-info .project-isi #button-project").textContent = ecommerce.button;
            }

            const mapala = project.mapala;
            if (mapala) {
                document.querySelectorAll("#project .project-info .project-isi")[1].querySelector("h2").textContent = mapala.title;
                document.querySelectorAll("#project .project-info .project-isi")[1].querySelector("p").textContent = mapala.description;
                document.querySelectorAll("#project .project-info .project-isi")[1].querySelector("#button-project").textContent = mapala.button;
                
            }
        }

        // Perbarui bagian achievement
        const achievement = translations.achievement;
        if (achievement) {
            document.querySelector("#achievement h1").textContent = achievement.title;
        }

        // Perbarui footer
        if (translations.footer) {
            document.querySelector("footer p").textContent = translations.footer;
        }
    };

    // Tambahkan event listener untuk tombol perubahan bahasa
    langToggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang");
            if (lang && lang !== currentLanguage) {
                currentLanguage = lang;
                loadLanguage(currentLanguage);
            }
        });
    });

    // Muat bahasa default (Inggris)
    loadLanguage(currentLanguage);
});
