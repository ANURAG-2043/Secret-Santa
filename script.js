const names = [
    "Sheetal Sohoni", "Mohit Mehta", "Tanya Jacob", "Chinmaya Tripathy",
    "Neha Kundri", "Deepa Patil", "Vaishakh Ratheeshan", "Shreya Sinha",
    "Shilpa Ganediwala", "Heenal Bhavsar", "Siddhi Amberkar", "Saurabh Hase",
    "Nitinkumar Balapnor", "Shashank Dhuri", "Nitish Agarwal",
    "M V Suresh Chinnam", "Vineet Timble", "Tushar Gangera", "Anubha Jain",
    "Chiragkumar Raiyani", "Anisha Bhole", "Siddhita Tandale", "Akshota Das",
    "Anilkumar Gupta", "Apurva Abhyankar", "Darshit Shah",
    "Gnana Venus Lazarus", "Jignesh Khambhayta", "Mohd Sameer",
    "Praneet Shekhar", "Prashant Chauhan", "Prathamesh Jadhav",
    "Puneet Tiwari", "Samridhi Sinha", "Tushar Beriwal",
    "Vishwaranjan Singh", "Honoze Nekoo", "ANAMIKA SELOTE",
    "Poonam Talwar", "Prachi Salvi", "Parth Sugandhi", "Tanvi Mittal",
    "Inderpal Singh", "Zaid Parkar", "Robin Lobo", "Renuka Gangan",
    "Sonali Paunikar", "Himanshu Chadha", "Ratna Gokhale",
    "Krutika Chaudhari", "Ninad Shetty", "Zulfikar Choudhary",
    "Pawan Tolia", "Vimal Gudhka", "Avinash Patil", "Mukesh Suthar",
    "Pranali Revankar", "Sucheta Salian", "Aneel Hudaalee",
    "Anurag Kumbhare", "Shardul Gharat", "Diana Lobo", "Jayesh Nangare",
    "Kashmira Lowalekar Ghosh", "Manoj Jangid", "Sumit Tiwari",
    "Jainam Gala", "Sindhu Vazhoor", "Ashish Bodinge"
];

// --- 1. Populate Dropdown ---
const select = document.getElementById("userSelect");
names.forEach(name => {
    const option = document.createElement("option");
    // IMPORTANT: When using Formspree, the name/value of the element must match the desired field name in the CSV
    option.value = name; 
    option.textContent = name;
    select.appendChild(option);
});

// --- 2. Initialize Local Storage (Optional for Admin/Pairing) ---
// NOTE: This section is kept only to maintain the Secret Santa pairings 
// (if you need the Admin panel to still work), but it is NOT used for attendance submission.
if (!localStorage.getItem("secretAssignments")) {
    const assignments = generateAssignments();
    localStorage.setItem("secretAssignments", JSON.stringify(assignments));
    // Attendance and Revealed storage are no longer strictly needed for this file, 
    // but we keep them initialized to prevent errors if other parts of the site use them.
    localStorage.setItem("attendance", JSON.stringify({})); 
    localStorage.setItem("revealed", JSON.stringify({}));
}

function generateAssignments() {
    let valid = false;
    let assignments = {};
    // ... (Assignment generation logic remains the same) ...
    while (!valid) {
        const shuffled = [...names].sort(() => 0.5 - Math.random());
        valid = true;

        for (let i = 0; i < names.length; i++) {
            if (names[i] === shuffled[i]) {
                valid = false;
                break;
            }
            assignments[names[i]] = shuffled[i];
        }

        for (let a in assignments) {
            const b = assignments[a];
            if (assignments[b] === a) {
                valid = false;
                break;
            }
        }
    }
    return assignments;
}

// === HANDLESUBMIT FUNCTION IS REMOVED ===
// The form submission is now handled by the HTML <form action="..."> 
// and Formspree directly.

// --- 3. Snow Animation ---
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    for (let i = 0; i < 50; i++) {
        let flake = document.createElement("div");
        flake.classList.add("snowflake");
        
        const size = Math.random() * 5 + 2; 
        flake.style.width = size + 8 +'px';
        flake.style.height = size + 8 +'px';
        
        flake.style.left = Math.random() * 100 + "vw";
        flake.style.animationDuration = 2 + Math.random() * 3.5 + "s";
        flake.style.animationDelay = Math.random() * 5.5 + "s"; 
        
        flake.style.opacity = Math.random();
        snowContainer.appendChild(flake);
    }
}
createSnow();