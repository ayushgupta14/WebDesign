const card = document.querySelector('#card');
const cardHeader = card.querySelector('header');
const resetBtn = document.querySelector('.reset');

// Initialize a variable to keep track of whether the mouse button is clicked
let clicked = false;

// Store the initial position of the card
let startTop = card.offsetTop;
let startLeft = card.offsetLeft;

// Variables to store the offset between the mouse click position and the card's position
let offsetX, offsetY;

// Add an event listener to the card header for the mouse down event
cardHeader.addEventListener('mousedown', (e) => {
    // Set the 'clicked' variable to true when the mouse button is pressed down
    clicked = true;

    // Calculate the offset between the mouse click position and the card's position
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
});

// Add an event listener to the entire document for the mouse up event
document.addEventListener('mouseup', () => {
    // Set the 'clicked' variable to false when the mouse button is released
    clicked = false;
});

// Add an event listener to the document for the mouse move event
document.addEventListener('mousemove', (e) => {
    // Check if the mouse button is not clicked, and if so, exit the function
    if (!clicked) return;

    // Update the card's position based on the mouse's current position and the offset
    const { clientX, clientY } = e;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;
});

// Function to reset the card's position to its initial state
function resetPosition() {
    card.style.left = `${startLeft}px`;
    card.style.top = `${startTop}px`;
}

// Add a click event listener to the reset button to call the 'resetPosition' function
resetBtn.addEventListener('click', resetPosition);

particlesJS("aboutUs", {

    particles: {
        number: {
            value: 35, // Number of Particles (count)
            density: {
                enable: true,
                value_area: 300, // Area where particles will be distributed
            },
        },

        color: {
            value: "#39FF14", // Particles color
        },
        shape: {
            type: "triangle", // Shape type
        },
        opacity: {
            value: 0.8, // Base opacity of particles
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, // Base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Maximum distance between linked particles
            color: "#39FF14",
            opacity: 0.4,
            width: 1,
        },

        // Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior when particles move out of the canvas
            bounce: false,
        },
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Enable hover interactivity
                mode: "repulse",
            },
            onclick: {
                enable: true, // Enable for click
                mode: "push", // Push particles on click
            },
            resize: true, // Resize particles animation on window resize
        },
    },

    // Detect retina displays
    retina_detect: true,

});