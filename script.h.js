<script>
// JavaScript to handle dynamic section display
function showSection(sectionId) {
  // Get all sections in the document
  const sections = document.querySelectorAll('.content-section');

  // Hide all sections
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

// Set up initial state
function initializePage() {
  // Hide all sections except "Home" or the first section
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => (section.style.display = 'none'));

  // Default to showing the About section
  const defaultSection = document.getElementById('about');
  if (defaultSection) {
    defaultSection.style.display = 'block';
  }
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    alert(Thank you, ${name}! Your message has been sent.);
    
    // Optionally, reset the form
    contactForm.reset();
  });
}

// Initialize the page when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);
</script>