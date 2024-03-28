// Function to handle the change event of Transhipment Point checkbox
function handleTranshipmentPointChange(checkbox) {
    var localDeliveryCheckbox = document.querySelector('input[name="isLocalDelivery"]');
    var carrierSettingSection = document.getElementById('carrier-setting-section');

    if (checkbox.checked) {
        localDeliveryCheckbox.checked = true;
        localDeliveryCheckbox.disabled = true;
        carrierSettingSection.style.display = 'block'; // Hiển thị phần tử Carrier Setting
    } else {
        localDeliveryCheckbox.disabled = false;
        localDeliveryCheckbox.checked = false;
        carrierSettingSection.style.display = 'none'; // Ẩn phần tử Carrier Setting
    }

    handleCarrierSettingVisibility(localDeliveryCheckbox, carrierSettingSection);
}

// Function to handle the change event of Local Delivery checkbox
function handleLocalDeliveryChange(checkbox) {
    var transhipmentCheckbox = document.querySelector('input[name="isTranshipmentPoint"]');
    var carrierSettingSection = document.getElementById('carrier-setting-section');

    if (!checkbox.checked) {
        transhipmentCheckbox.disabled = false;
    }

    handleCarrierSettingVisibility(checkbox, carrierSettingSection);
}


//  Function to handle visibility of Carrier Setting section
function handleCarrierSettingVisibility(checkbox, section) {
    if (checkbox.checked) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Add event listeners to checkboxes
var transhipmentCheckbox = document.querySelector('input[name="isTranshipmentPoint"]');
transhipmentCheckbox.addEventListener('change', function() {
    handleTranshipmentPointChange(this);
});

var localDeliveryCheckbox = document.querySelector('input[name="isLocalDelivery"]');
localDeliveryCheckbox.addEventListener('change', function() {
    handleLocalDeliveryChange(this);
});

// Call handleCarrierSettingVisibility function to initialize visibility of Carrier Setting section
var carrierSettingSection = document.getElementById('carrier-setting-section')
handleCarrierSettingVisibility(localDeliveryCheckbox, carrierSettingSection);


//handeld dropdown list Shiping method
document.getElementById("select-shiping-methods").addEventListener("click", function() {
    var dropList = document.getElementById("drop-list-shipping-method");
    if (dropList.style.display === "none" || dropList.style.display === "") {
      dropList.style.display = "block";
    } else {
      dropList.style.display = "none";
    }
  });




// handle selected item
document.getElementById("drop-list-shipping-method").style.display = "none";
document.getElementById("selected_method").style.display = "none";

document.getElementById("select-item-ship4p").addEventListener("click", function() {
  var selectedMethod = document.getElementById("selected_method");
  var placeShippingMethod = document.getElementById("place_shipping_method");
  
  selectedMethod.style.display = "block"; 
  placeShippingMethod.style.display = "none"; 
});

//handeld dropdown list Market
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

