const everyone = [
    {
        name: "Dimitri",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
    },
    {
        name: "Christine",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Rehana",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Sim",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Tayena",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Daniel",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Ishmael",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Jingkang",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
    {
        name: "Mahmoud",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript"
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById("teamContainer");

    function createMembers() {
        teamContainer.innerHTML = "";

        everyone.forEach((member, index) => {
            const memberElement = document.createElement("div");
            memberElement.className = "member";
            memberElement.innerHTML = `
                <img src="${member.avatar}" class="member-avatar" alt="${member.name}">
                <div class="member-name">${member.name}</div>
                <div class="member-language">${member.language}</div>
            `;
            teamContainer.appendChild(memberElement);
        });

    }

    createMembers();
});

