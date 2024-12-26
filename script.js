const toggleButton = document.getElementById('darkModeToggle');
const root = document.documentElement;

toggleButton.addEventListener('click', () => {
    const isDarkMode = root.style.getPropertyValue('--background-color') === 'rgb(30, 30, 30)';
    
    if (isDarkMode) {
        root.style.setProperty('--background-color', 'rgb(245, 245, 245)');
        root.style.setProperty('--text-color', 'rgb(30, 30, 30)');
        root.style.setProperty('--button-background', 'rgb(30, 30, 30)');
        root.style.setProperty('--button-text', 'white');
        toggleButton.textContent = '🌙 Dark Mode';
    } else {
        root.style.setProperty('--background-color', 'rgb(30, 30, 30)');
        root.style.setProperty('--text-color', 'rgb(245, 245, 245)');
        root.style.setProperty('--button-background', 'rgb(245, 245, 245)');
        root.style.setProperty('--button-text', 'rgb(30, 30, 30)');
        toggleButton.textContent = '☀️ Light Mode';
    }
});
