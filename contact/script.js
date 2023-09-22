function toggleDescription(descId) {
    let description = document.getElementById(descId);
    if(description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}
