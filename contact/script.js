let currentOpenDesc = null;

function toggleDescription(descId) {
    let description = document.getElementById(descId);
    if (window.innerWidth > 768) { 
        if(description.style.display === "block") {
            description.style.display = "none";
        } else {
            description.style.display = "block";
        }
        return;
    }
    }
    if (currentOpenDesc && currentOpenDesc !== description) {
        currentOpenDesc.style.display = "none";
    }
    if(description.style.display === "block") {
        description.style.display = "none";
        currentOpenDesc = null;
    } else {
        description.style.display = "block";
        currentOpenDesc = description;
    }
}
