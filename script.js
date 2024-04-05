// Function to update metrics (sample data)
function updateMetrics() {
    // Sample data (replace with actual data from Firebase)
    var temperatureCelsius = 25;
    var temperatureFahrenheit = temperatureCelsius * 9 / 5 + 32;
    var tds = 150;
    var ec = 300;

    // Update temperature metrics
    document.getElementById("celsius").textContent = temperatureCelsius;
    document.getElementById("fahrenheit").textContent = temperatureFahrenheit;

    // Update TDS and EC metrics
    document.getElementById("tds").textContent = tds;
    document.getElementById("ec").textContent = ec;
}

// Call updateMetrics function on page load (for demo purposes)
window.onload = updateMetrics;