document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([48.8566, 2.3522], 6); // Coordonnées de Paris

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marqueur de démonstration
    L.marker([48.8566, 2.3522]).addTo(map)
        .bindPopup("<b>Paris</b><br>Point de départ.")
        .openPopup();
});
