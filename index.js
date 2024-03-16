function calculateDiscount(){
  
    let billAmount = document.getElementById("amount").value;
    let discountRate = document.getElementById("rate").value;

    let total= (billAmount * discountRate / 100).toFixed(2); ;



  

    document.getElementById("totalDiscount").style.display="flex" //can be put block as well

    document.getElementById("totalDiscount2").style.display="flex" // can be put block as well
    
    document.getElementById("discount").innerHTML = total;
}


//hide total
document.getElementById("totalDiscount").style.display = "none";
document.getElementById("totalDiscount2").style.display = "none";

//show total
document.getElementById("calculate").onclick = function() {
    calculateDiscount();
  };

  //stop scrolling up
  document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();})
