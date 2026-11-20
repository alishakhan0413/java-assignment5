var student1 = {
    image:"https://i.pinimg.com/736x/25/1f/55/251f55e9720d184b76c48bdf6e84db90.jpg",
    name: "Alisha Khan",
    email: "alishakhanak0413@gmail.com",
    contact: "0347265435",
    courses: ["WMA", "GD"],
    residence: {
        address: "karachi",
        country: "pakistan",
    }
}
console.log(student1.name);
console.log(student1.residence.address);
console.log(student1.courses[0]);
delete student1.contact
document.getElementById("profile").innerHTML=   `
<div class="card" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${student1.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title">${student1.name}</h2>
                <p class= mb-1>email: ${student1.email}</p>
                <p class= mb-1>contact: ${student1.contact}</p>
                <p class= mb-1>city: ${student1.residence.address}</p>
                <p class= mb-1>country: ${student1.residence.country}</p>
                <p class= mb-1>enrolled course: ${student1.courses[0]}</p>
            </div>
        </div>
    </div>
</div>
`
 
console.log("name" in student1);
console.log("contact" in student1);