const form = document.getElementById("studentForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;


let response = await fetch("https://cloud.activepieces.com/api/v1/webhooks/A3fmDh7ifefHXjW4Xc2Qx/sync", {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
mobile:mobile
})

});


if(response.ok){
alert("Submitted successfully");
}
else{
alert("Error submitting form");
}

});
