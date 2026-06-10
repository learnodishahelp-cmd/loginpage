function submitForm() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    fetch("https://mkn8n.app.n8n.cloud/webhook/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            mobile
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        localStorage.setItem("name", name);
        localStorage.setItem("mobile", mobile);

        window.location.href = "dashboard.html";
    })
    .catch(error => {
        console.error(error);
        alert("Error submitting form");
    });
}
