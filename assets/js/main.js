// Function handle section Carrier Setting display

// document.getElementById('carrier-setting-section').style.display = "none";
// var transhipmentCheckbox = document.querySelector('input[name="isTranshipmentPoint"]');
// var localDeliveryCheckbox = document.querySelector('input[name="isLocalDelivery"]');

// function handleCheckboxChange()  {
//   var carrierSettingSection = document.getElementById('carrier-setting-section');
  
// if (transhipmentCheckbox.checked || localDeliveryCheckbox.checked ) {
//   carrierSettingSection.style.display = "block"
// } else {
//   carrierSettingSection.style.display = "none"
// }
// };

// transhipmentCheckbox.addEventListener("change", handleCheckboxChange);
// localDeliveryCheckbox.addEventListener("change", handleCheckboxChange);


// //Fucntion handle dropdown list Shiping method
// document.getElementById("select-shiping-methods").addEventListener("click", function() {
//     var dropList = document.getElementById("drop-list-shipping-method");
//     if (dropList.style.display === "none" || dropList.style.display === "") {
//       dropList.style.display = "block";
//     } else {
//       dropList.style.display = "none";
//     }
//   });

// handle selected item
// document.getElementById("drop-list-shipping-method").style.display = "none";
// document.getElementById("selected_method").style.display = "none";

// document.getElementById("select-item-ship4p").addEventListener("click", function() {
//   var selectedMethod = document.getElementById("selected_method");
//   var placeShippingMethod = document.getElementById("place_shipping_method");
  
//   selectedMethod.style.display = "block"; 
//   placeShippingMethod.style.display = "none"; 
// });

//handle dropdown list Market
document.getElementById("market_list").style.display = "none";

document.getElementById("select_market").addEventListener("click", function() {
    var market_list_dropList = document.getElementById("market_list");
    if (market_list_dropList.style.display === "none" || market_list_dropList.style.display === "") {
        market_list_dropList.style.display = "block";
    } else {
        market_list_dropList.style.display = "none";
    }
   
  });


  // handle selected item
document.getElementById("market_list").style.display = "none";
document.getElementById("vietnam-market-selected").style.display = "none";

document.getElementById("vietnam-market").addEventListener("click", function() {
  var selectedMarket = document.getElementById("vietnam-market-selected");
  var placeMarket = document.getElementById("place_market");
  
  selectedMarket.style.display = "flex"; 
  placeMarket.style.display = "none"; 
});




// handle Manage POS
document.getElementById("manage_POS").style.display = "none";

// when activePOS change
var checkbox = document.getElementById("active_POS");
checkbox.addEventListener("change", function() {
  var managePOS = document.getElementById("manage_POS");
  
  if (checkbox.checked) {
    managePOS.style.display = "block"; 
  } else {
    managePOS.style.display = "none"; 
  }
});