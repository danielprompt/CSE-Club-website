const everyone = [
    {
        name: "Dimitri",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Christine",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Rehana",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Sim",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Tayena",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Daniel",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Ishmael",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Jingkang",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
    },
    {
        name: "Mahmoud",
        avatar: "https://pm1.narvii.com/6512/1f58cc93200885080ae84a4ec582bf01704a1db5_hq.jpg",
        language: "Java, HTML, CSS, JavaScript",
        more: "More"
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
                <div class="member-more"><button class="btn btn-dark">${member.more}</button></div>
            `;
            teamContainer.appendChild(memberElement);
        });

    }

    createMembers();
});