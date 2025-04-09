const members = [
    {
        name: "Tayena",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the about page."
    },
    {
        name: "Daniel",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the about page."
    },
    {
        name: "Dimitri",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the about page."
    },
    {
        name: "Sim",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the about page."
    },
    {
        name: "Rehana",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the main page."
    },
    {
        name: "Christine",
        language: "HTML, CSS, JavaScript",
        image: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        description: "Worked on the main page."
    },
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const memberContainer = document.getElementById("memberContainer");
    const dotContainer = document.getElementById("dotContainer");
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const more = document.getElementById("more");

    let currentIndex = 0;
    const visibleMembers = 3; // Number of members visible at once
    const totalGroups = Math.ceil(members.length / visibleMembers); // Calculate total number of groups

    function createMembers() {
        memberContainer.innerHTML = "";
        dotContainer.innerHTML = "";

        // Create member elements
        members.forEach((member, index) => {
            const memberElement = document.createElement("div");
            memberElement.className = "member";
            memberElement.innerHTML = `
                <img src="${member.image}" class="member-image" alt="${member.name}" style="max-width: 80px; border-radius: 50%;">
                <div class="member-name">${member.name}</div>
                <div class="member-language">${member.language}</div>
                <div class="member-description">${member.description}</div>
            `;
            memberContainer.appendChild(memberElement);
        });

        // Create one dot for each group of 3 members
        for (let i = 0; i < totalGroups; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => goToGroup(i));
            dotContainer.appendChild(dot);
        }

        updateMemberPositions();
    }

    function goToGroup(groupIndex) {
        currentIndex = groupIndex * visibleMembers;
        updateMemberPositions();
    }

    function updateMemberPositions() {
        const memberElements = document.querySelectorAll(".member");
        const dots = document.querySelectorAll(".dot");
        const currentGroup = Math.floor(currentIndex / visibleMembers);
        
        memberElements.forEach((member, index) => {
            // Calculate position relative to currentIndex
            let position = index - currentIndex;
            
            // Handle visibility and positioning
            if (position >= 0 && position < visibleMembers) {
                member.style.display = "flex";
                member.style.transform = `translateX(${position * 120}px)`;
                member.classList.add("active");
                
                // Small delay for each card to create a staggered effect
                setTimeout(() => {
                    member.style.opacity = 1;
                }, position * 50);
            } else {
                member.classList.remove("active");
                
                // Delay the display: none to allow for fade-out animation
                setTimeout(() => {
                    if (index < currentIndex || index >= currentIndex + visibleMembers) {
                        member.style.display = "none";
                    }
                }, 400); // Match this to your transition time
                
                member.style.opacity = 0;
            }
        });

        // Update active dot based on current group
        dots.forEach((dot, index) => {
            dot.className = index === currentGroup ? 'dot active' : 'dot';
        });
    }

    previous.addEventListener("click", () => {
        if (currentIndex >= visibleMembers) {
            currentIndex -= visibleMembers;
        } else {
            // Go to the last complete group
            const lastGroupIndex = Math.floor((members.length - 1) / visibleMembers);
            currentIndex = lastGroupIndex * visibleMembers;
        }
        updateMemberPositions();
    });

    next.addEventListener("click", () => {
        if (currentIndex < members.length - visibleMembers) {
            currentIndex += visibleMembers;
        } else {
            currentIndex = 0;                            
        }
        updateMemberPositions();
    });

    // Initialize the members display
    createMembers();
});