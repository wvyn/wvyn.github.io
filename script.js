function scrollToSection(selector) {
    const target = document.querySelector(selector);
    target.scrollIntoView({ behavior: 'smooth' });
}

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const root = document.documentElement;

toggleButton.addEventListener('click', () => {
    const isDarkMode = root.style.getPropertyValue('--background-color') === 'rgb(30, 30, 30)';
    root.style.setProperty('--background-color', isDarkMode ? 'rgb(245, 245, 245)' : 'rgb(30, 30, 30)');
    root.style.setProperty('--text-color', isDarkMode ? 'rgb(30, 30, 30)' : 'rgb(245, 245, 245)');
});
