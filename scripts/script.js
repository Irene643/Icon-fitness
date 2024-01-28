document.addEventListener('DOMContentLoaded', () => {
    // Add images dynamically
    const imageContainer = document.getElementById('imageContainer');

    const imagePaths = [
        'images/bar-bells.jpg',
        'images/Olympic-flat-bench.jpg',
        'images/spin-bike.jpg',
        'images/leg-extension.jpg',
        'images/battle-rope.jpg',
        'images/lat-pulldown.jpg'
    ];

    imagePaths.forEach((path, index) => {
        const gymItem = document.createElement('div');
        gymItem.classList.add('gym-item', 'animate__animated', 'animate__slideInRight');

        const image = document.createElement('img');
        image.src = path;
        image.alt = `Gym Item ${index + 1}`;

        const description = document.createElement('p');
        description.textContent = `Description for Gym Item ${index + 1}`;

        gymItem.appendChild(image);
        gymItem.appendChild(description);
        imageContainer.appendChild(gymItem);

        // Delay the animation for each image
        gymItem.style.animationDelay = `${index * 0.5}s`;
    });

    // Scroll animations
    window.addEventListener('scroll', () => {
        const scrollSections = document.querySelectorAll('.scroll-section');
        scrollSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    // BMI Calculator logic
    const calculateBMI = () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid values for height and weight.');
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        const bmiResult = document.getElementById('bmiResult');

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Category: ${category}`;
    };

    // Attach the function to the button click event
    const calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateBMI);
    }

    // EmailJS contact form logic
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Replace 'your_service_id' with your EmailJS service ID
    emailjs.init("service_hmiydek");

    // Use the form element directly for FormData
    const formData = new FormData(contactForm);
    console.log(formData)

    const fromName = formData.get('name');
    const toName = formData.get('email'); // Assuming email field is used as recipient
    const message = formData.get('message');

        emailjs.send("service_hmiydek", "template_xfszd0n", {
            from_name: fromName,
            to_name: toName,
            message: message,
        },
        "9i4-UayzXvi7GVD1h"
        )
        .then(
            function (response) {
                console.log("Email sent successfully", response);
                alert('Form submitted successfully');
            },
            function (error) {
                console.error("Email failed to send", error);
                alert('Error submitting form');
            }
        );

    // Clear the form after submission if needed
    contactForm.reset();
});
//image slider
$(document).ready(function () {
      $('#gymEquipmentCarousel').carousel();
   });

    // gapi.auth.authorize({
    //     'client_id': 'YOUR_CLIENT_ID',
    //     'scope': 'https://www.googleapis.com/auth/gmail.readonly',
    //     'immediate': false
    //   }, handleAuthResult);
});
