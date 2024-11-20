const colorCircles = document.querySelectorAll('.color-circle');
const customColorPicker = document.getElementById('customColorPicker');

colorCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    // Remove 'active' class from all circles except the light grey one
    colorCircles.forEach(c => {
      if (!c.classList.contains('light-grey')) {
        c.classList.remove('active');
      }
    });

    // If light grey circle is clicked, open the color picker
    if (circle.classList.contains('light-grey')) {
      customColorPicker.click();
    } else {
      // Add 'active' class to the selected circle (for check mark)
      circle.classList.add('active');
    }
  });
});

// Listen for color change from the custom color picker
customColorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  const lightGreyCircle = document.querySelector('.light-grey');

  // Change the background of the light grey circle to the selected color
  lightGreyCircle.style.backgroundColor = selectedColor;
});
