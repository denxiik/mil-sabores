// Function to load content from another HTML file
function loadHTML(filename, elementId) {
    return fetch(filename)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

function initializeLanguageOptions() {
    const mainButton = document.getElementById('language-main-button');
    const languageOptions = document.getElementById('language-options');

    mainButton.addEventListener('click', function(event) {
        languageOptions.classList.toggle('show');
        event.stopPropagation();
    });

    // Close the language options if the user clicks anywhere outside of the selector
    document.addEventListener('click', function(event) {
        const isClickInside = languageOptions.contains(event.target) || mainButton.contains(event.target);
        if (!isClickInside && languageOptions.classList.contains('show')) {
            languageOptions.classList.remove('show');
        }
    });
}