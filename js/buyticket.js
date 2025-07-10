//when click buy ticket then hidden the header section
function buyTicketBtn(){
    const buyTicketButton = document.getElementById("header-section");
    buyTicketButton.classList.add("hidden");

    // this is only show header section[home section], hidden the body part 
    const homeButton = document.getElementById("body-part");
    homeButton.classList.remove("hidden");
}



