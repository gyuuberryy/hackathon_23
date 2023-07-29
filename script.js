function openNav() {
    console.log("openNav() function called");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    console.log("closeNav() function called");
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function redirectToThanksPage() {
    window.location.href = "thanks.html";
    return false; //
}