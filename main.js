function pinbtn() {
  let usernam = document.getElementById("username").value.trim();
  let pin = document.getElementById("pin").value.trim();
  
  let b1 = document.querySelector(".b1");
  let b2 = document.querySelector(".b2");
  
  if (usernam === "Hajrateali" && pin === "86055") {
    b1.hidden = true;
    b2.hidden = false;
  } else {
    alert("Kuchh To Galt Hai");
  }
}

function docbtn() {
  let b2 = document.querySelector(".b2");
  let b3 = document.querySelector(".b3");
  
  b2.hidden = true;
  b3.hidden = false;
}

function back() {
  let b2 = document.querySelector(".b2");
  let b3 = document.querySelector(".b3");
  
  b2.hidden = false;
  b3.hidden = true;
}



function docname() {
  let name = document.getElementById("docname").value.trim().toLowerCase();
  let b3 = document.querySelector(".b3");
  let b4 = document.querySelector(".b4");
  let b41 = document.querySelector(".b41");
  
  let Imagesrc = "";

  if (name === "aadhar card") {
    Imagesrc = "./aadhar.jpg";
    
  } else if (name === "pan card") {
    Imagesrc = "./aadhar.jpg";
    
  } else if (name === "passbook") {
    Imagesrc = "./aadhar.jpg";
    
  } else if (Imagesrc === "") {
    alert("Document not found!");
    return;
    
  }
  

  let img = document.createElement("img");
  img.src = Imagesrc; 
  img.style.width = "400px";
  img.style.height = "600px";
  img.style.display = "block";
  img.style.margin = "auto";

  b3.hidden = true;
  b4.hidden = false;
  
  b41.innerHTML = "";
  b41.appendChild(img);
}



