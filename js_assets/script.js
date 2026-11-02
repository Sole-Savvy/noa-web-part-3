// 1. INTERACTIVE TABS

function openTab(tabName) {

    let contents = document.getElementsByClassName("tab-content");

    for (let i = 0; i < contents.length; i++) {
        Contents[i].classList.remove("active");
    }

    Document.getElementById(tabName).classList.add("active");
}


// 2. ACCORDION

let accordionButtons = document.getElementsByClassName("accordion");

for (let i = 0; i < accordionButtons.length; i++) {

    accordionButtons[i].addEventListener("click", function() {

        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            Content.style.display = "block";
        }

    });

}


// 3. SEARCH AND FILTER SERVICES

let search = document.getElementById("serviceSearch");

if (search) {

    Search.addEventListener("input", function() {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".service-card");

        let found = 0;

        Cards.forEach(function(card) {

            if (card.innerText.toLowerCase().includes(value)) {
                Card.style.display = "block";
                Found++;
            } else {
                Card.style.display = "none";
            }

        });

        Document.getElementById("noResults").innerText =
            Found === 0 ? "No services found." : "";

    });

}


// 4. IMAGE GALLERY LIGHTBOX

function showImage(image) {

    Document.getElementById("lightbox").style.display = "flex";

    Document.getElementById("largeImage").src = image.src;

    Document.getElementById("largeImage").alt = image.alt;

}

function closeImage() {

    Document.getElementById("lightbox").style.display = "none";

}


// 5. INTERACTIVE MAP

let mapElement = document.getElementById("map");

if (mapElement && typeof L !== "undefined") {

    let map = L.map("map").setView([-25.7479, 28.2293], 12);

    L.tileLayer(
        https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png,
        {
            Attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    L.marker([-25.7479, 28.2293])
        .addTo(map)
        .bindPopup("Noa-Web Studios – Example Location");

}


// 6. SCROLL ANIMATIONS

let observer = new IntersectionObserver(function(entries) {

    Entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            Entry.target.classList.add("fade-in");
        }

    });

}, { threshold: 0.1 });

Document.querySelectorAll("section").forEach(function(section) {
    Observer.observe(section);
});


// 7. CLOSE LIGHTBOX WITH ESCAPE KEY

Document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        if (document.getElementById("lightbox")) {
            closeImage();
        }
    };


// 8. ENQUIRY FORM VALIDATION

let enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("enqName").value.trim();
        let email = document.getElementById("enqEmail").value.trim();
        let phone = document.getElementById("enqPhone").value.trim();
        let service = document.getElementById("enqService").value;
        let budget = document.getElementById("budget").value;
        let message = document.getElementById("enqMessage").value.trim();

        let result = document.getElementById("enquiryResult");

        result.className = "";

        if (name.length < 3) {
            result.innerText = "Please enter a valid full name.";
            result.className = "error";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Result.innerText = "Please enter a valid email address.";
            Result.className = "error";
            Return;
        }

        if (!/^[0-9+ ]{10,15}$/.test(phone)) {
            Result.innerText = "Please enter a valid phone number.";
            Result.className = "error";
            Return;
        }

        if (message.length < 10) {
            Result.innerText = "Please write at least 10 characters.";
            Result.className = "error";
            Return;
        }

        Result.innerText =
            "Thank you " + name +
            "! Your enquiry has been received for " +
            Service + ". Your selected budget is " +
            Budget + ". We will contact you about pricing and availability.";

        Result.className = "success";

        Console.log("Enquiry information:", {
            Name, email, phone, service, budget, message
        });

        enquiryForm.reset();

    });

}


// 9. CONTACT FORM VALIDATION AND AJAX SUBMISSION

let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();

        let email = document.getElementById("contactEmail").value.trim();

        let type = document.getElementById("messageType").value;

        let message = document.getElementById("contactMessage").value.trim();

        let result = document.getElementById("contactResult");

        result.className = "";

        if (name.length < 3) {
            result.innerText = "Please enter your full name.";
            result.className = "error";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Result.innerText = "Please enter a valid email address.";
            Result.className = "error";
            Return;
        }

        if (message.length < 10) {
            Result.innerText = "Please write at least 10 characters.";
            Result.className = "error";
            Return;
        }

        result.innerText = "Sending your message...";
        
        try {

            // Replace with your actual email address.
            let recipient = noaweb25.gmail.com;

            let response = await fetch(
                https://formsubmit.co/ajax/ + recipient,
                {
                    Method: "POST",

                    Headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    Body: JSON.stringify({
                        Name: name,
                        Email: email,
                        messageType: type,
                        message: message,
                        _subject: "New MA Web Studios Contact Message"
                    })
                }
            );

            let data = await response.json();

            if (response.ok && data.success) {

                Result.innerText =
                    "Your message has been sent successfully!";

                Result.className = "success";

                contactForm.reset();

            } else {

                throw new Error("Message could not be sent.");

            }

        } catch (error) {

            Result.innerText =
                "Unable to send your message. Please try again later.";

            Result.className = "error";

        }

    });
}
});
