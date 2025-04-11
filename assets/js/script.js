const menu = document.getElementById('menu')
const nav = document.getElementById('nav')




menu.addEventListener('click', () => {
    nav.classList.toggle('opened')
})


window.addEventListener('scroll', () => {
    if(window.scrollY >= 1){
        document.getElementById('header').classList.add('scrolling')
    } else {
        document.getElementById('header').classList.remove('scrolling')
    }
})


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_sxlrscb";
    const templateID = "template_53bl1ze";
  
      emailjs.send(serviceID, templateID, params)
      .then(res =>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

// document.getElementById('contactForm').addEventListener("submit", function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();


//     if (name === "" || email === "" || message === "") {
//         alert("All fields are required");  
//     } else {
//         alert("Thank you! Your message has been sent");
//         this.reset();
//     }
// });

let index = 0;
function showNextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(t => t.style.display = "none");
    testimonials[index].style.display = "block";
    index = (index + 1) % testimonials.length;
}
setInterval(showNextTestimonial, 3000);
showNextTestimonial();

