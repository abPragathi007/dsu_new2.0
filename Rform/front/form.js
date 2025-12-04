// Save Registration
document.getElementById("regForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let res = await fetch("/register", {
        method: "POST",
        body: formData
    });

    alert("Registration Saved!");
});

// Get Registrations
document.getElementById("getData").addEventListener("click", async () => {
    let res = await fetch("/getRegistrations");
    let data = await res.json();

    let out = "";
    data.forEach(d => {
        out += `<p><b>${d.name}</b> - ${d.usn} - ${d.email}</p>`;
    });

    document.getElementById("output").innerHTML = out;
});
