var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btn = el.currentTarget; 
   var electronic = btn.dataset.electronic; 
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   }); 

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   }); 

   document.querySelector("#" + electronic).classList.add("active");
   
   btn.classList.add("active");
}

function myFuntion(){
   var x = document.getElementById("info1");
   var y = document.getElementById("info2");
   var btn = document.getElementById("btnEditInfo");
   var btnC= document.getElementById("btnCancelInfo");

   if(x.style.display === "none"){
      y.style.display = "none";
      x.style.display = "flex";
      btn.innerHTML="Chỉnh Sửa";
      btn.className = btn.className.replace(' btn-outline-success',' btn-outline-primary');
      btnCancelInfo.style.display='none';
   }else {
      x.style.display = "none";
      y.style.display = "flex";
      btn.innerHTML="Lưu";
      btn.className = btn.className.replace(' btn-outline-primary',' btn-outline-success');
      btnCancelInfo.style.display='block';
   }
}