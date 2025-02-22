function switchStylesheet() {
    let themeLink = document.getElementById("theme");

    if (window.matchMedia("(orientation: portrait)").matches) {
        themeLink.href = "portrait.css?t=" + new Date().getTime(); 
    } else {
        themeLink.href = "landscape.css?t=" + new Date().getTime(); 
    }
}

// Run after the page loads
document.addEventListener("DOMContentLoaded", function () {
    switchStylesheet(); // Run on page load
    window.addEventListener("resize", switchStylesheet); // Run on resize
});
function handleClick(buttonNumber) {
    alert("Button " + buttonNumber + " clicked!");
}
