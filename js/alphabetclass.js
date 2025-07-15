function seatSelect(){
  const seatA1 =  document.getElementById("a-class1");
//   console.log(seatA1.innerText);
    const seat = document.getElementById("seat");
    // console.log(seat.innerText)
    seat.innerText = seatA1.innerText;
   
    seatA1.style.backgroundColor = "tomato";
  
}