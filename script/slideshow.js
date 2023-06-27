
// JavaScript
// Get the buttons and the images
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = document.querySelectorAll("image");

// Define a function to change the animation direction
function changeDirection(direction) {
  // Loop through the images
  for (let i = 0; i < images.length; i++) {
    // Get the current animation duration
    let duration = parseFloat(images[i].style.animationDuration);
    // If the direction is prev, decrease the duration by 1s
    if (direction === "prev") {
      duration -= 1;
    }
    // If the direction is next, increase the duration by 1s
    if (direction === "next") {
      duration += 1;
    }
    // Set the new animation duration
    images[i].style.animationDuration = duration + "s";
  }
}

// Add event listeners to the buttons
prev.addEventListener("click", function() {
  changeDirection("prev");
});

next.addEventListener("click", function() {
  changeDirection("next");
});

// const clockwiseButton = document.getElementById('clockwise');
// const counterclockwiseButton = document.getElementById('counterclockwise');
// 
// clockwiseButton.addEventListener('click', clockwise);
// counterclockwiseButton.addEventListener('click', counterclockwise);
// 
// function clockwise() {
//   const circle1 = document.getElementById('circle1');
//   const circle2 = document.getElementById('circle2');
//   const circle3 = document.getElementById('circle3');
// 
//   circle1.style.transform = 'rotate(-120deg)';
//   circle2.style.transform = 'rotate(-240deg)';
//   circle3.style.transform = 'rotate(-360deg)';
// }
// 
// function counterclockwise() {
//   const circle1 = document.getElementById('circle1');
//   const circle2 = document.getElementById('circle2');
//   const circle3 = document.getElementById('circle3');
// 
//   circle1.style.transform = 'rotate(0deg)';
//   circle2.style.transform = 'rotate(-120deg)';
//   circle3.style.transform = 'rotate(-240deg)';
// }
 // let currentCircle = 1;
 //
 // function cycle(direction) {
 //   console.log('Current circle:', currentCircle);
 //   console.log('Current Direction:', direction);
 //   if (direction === 'clockwise') {
 //     currentCircle = currentCircle < 3 ? currentCircle + 1 : 1;
 //   } else {
 //     currentCircle = currentCircle > 1 ? currentCircle - 1 : 3;
 //   }
 //   switch (currentCircle) {
 //    case 1:
 //      getElementById("circle1")
 //      break;
 //
 //    default:
 //      break;
 //   }
 //
 //   const newActiveCircle = circles[currentImage - 1];
 //   newActiveCircle.classList.add('active');
   // Set the z-index of each circle to bring the active circle to the front
   // for (let i = 1; i <= 3; i++) {
   //   const circle = document.getElementById(`circle${i}`);
   //   console.log('Updating circle'+i+' currentCircle='+currentCircle);
   //   circle.style.zIndex = i === currentCircle ? 2 : 1;
   //   console.log('New z-index for circle'+i+': '+circle.style.zIndex);
 // }

// get the elements and center point coordinates
// const elements = document.querySelectorAll('.element');
// const centerX = 200; // replace with your center point's x coordinate
// const centerY = 200; // replace with your center point's y coordinate
// 
// // define the angle and radius for each element's position around the circle
// const angleIncrement = Math.PI / 3; // 120 degrees
// const radius = 100;
// 
// // define the initial angle and rotation direction
// let angle = 0;
// let rotationDirection = 1; // 1 for clockwise, -1 for counter-clockwise
// 
// // define the animation function
// function animate() {
//   // calculate the new position for each element based on the current angle
//   elements.forEach((element, index) => {
//     const x = centerX + radius * Math.cos(angle + index * angleIncrement * rotationDirection);
//     const y = centerY + radius * Math.sin(angle + index * angleIncrement * rotationDirection);
//     element.style.transform = `translate(${x}px, ${y}px)`;
//   });
//   
//   // update the angle and rotation direction for the next animation frame
//   angle += 0.05;
//   if (angle >= 2 * Math.PI) {
//     angle = 0;
//   }
//   
//   // request the next animation frame
//   requestAnimationFrame(animate);
// }
// 
// // start the animation
// animate();
