document.querySelector("form").addEventListener("submit", async (e)=>{
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const mobile = document.querySelector("#mobile").value;

  try {

    const response = await fetch("https://cloud.activepieces.com/api/v1/webhooks/A3fmDh7ifefHXjW4Xc2Qx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        mobile: mobile
      })
    });

    const result = await response.text();

    if(response.ok){
      alert("Form submitted successfully");
    }
    else{
      alert("Server error: " + result);
    }

  } catch(error){
    alert("Form submitting error");
    console.log(error);
  }

});
