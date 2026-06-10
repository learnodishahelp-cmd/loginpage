function submitForm() {

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    if(!name || !mobile){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);

    /*
    Later connect n8n webhook here

    fetch("YOUR_N8N_WEBHOOK_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            mobile
        })
    });
    */

    window.location.href = "dashboard.html";
}
