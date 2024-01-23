

// Funktion för att sortera lista
function sortCourses() {
    // Hämtar listan
    const courseList = document.getElementById("courseList");

    // Hämtar list items och konverterar dem till en array
    let items = Array.from(courseList.getElementsByTagName("li"));

    // Sortera arrayen av list items baserat på deras textinnehåll
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Rensa den nuvarande listan
    courseList.innerHTML = "";

    // Lägg till de sorterade list items tillbaka i listan
    items.forEach(item => courseList.appendChild(item));
}
