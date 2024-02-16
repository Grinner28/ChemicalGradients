document.addEventListener('DOMContentLoaded', function() {
    setupGradientButtons();
    generateRandomConcentrationsAndUpdateIons();
});

const ionContainerOuter = document.querySelector('.ion-container-outer');
const ionContainerInner = document.querySelector('.ion-container-inner');

const sodiumPositionsOuter = []; // Define positions
const sodiumPositionsInner = []; // Define positions

let currentNaOutside = 0;
let currentNaInside = 0;

function updateSodiumIons(concentration, container, positions) {
    container.querySelectorAll('.sodium-ion').forEach(ion => ion.remove());
    const numberOfSodiumIons = Math.floor(concentration / 25);

    for (let i = 0; i < numberOfSodiumIons && i < positions.length; i++) {
        let sodiumIon = document.createElement('div');
        sodiumIon.classList.add('sodium-ion');
        sodiumIon.innerHTML = 'Na<sup>+</sup>';
        sodiumIon.style.top = positions[i].top;
        sodiumIon.style.left = positions[i].left;
        container.appendChild(sodiumIon);
    }
}

function generateRandomConcentrationsAndUpdateIons() {
    const isEquilibrium = Math.random() < 0.3;
    let naOutside, naInside;

    if (isEquilibrium) {
        naOutside = naInside = Math.floor(Math.random() * 40) * 5;
    } else {
        naOutside = Math.floor(Math.random() * 40) * 5;
        do {
            naInside = Math.floor(Math.random() * 40) * 5;
        } while (naInside === naOutside);
    }

    currentNaOutside = naOutside;
    currentNaInside = naInside;

    ionContainerOuter.querySelector('.ion-concentration-outer').textContent = `Na+: ${naOutside}mM`;
    ionContainerInner.querySelector('.ion-concentration-inner').textContent = `Na+: ${naInside}mM`;

    updateSodiumIons(naOutside, ionContainerOuter, sodiumPositionsOuter);
    updateSodiumIons(naInside, ionContainerInner, sodiumPositionsInner);
}

document.getElementById('new-question-btn').addEventListener('click', generateRandomConcentrationsAndUpdateIons);

function setupGradientButtons() {
    document.getElementById('into-cell-button').addEventListener('click', () => checkAnswer('into'));
    document.getElementById('out-cell-button').addEventListener('click', () => checkAnswer('out'));
    document.getElementById('equilibrium-button').addEventListener('click', () => checkAnswer('equilibrium'));
}

function checkAnswer(direction) {
    let type;
    if (currentNaOutside > currentNaInside) {
        type = 'into'; 
    } else if (currentNaOutside < currentNaInside) {
        type = 'out';
    } else {
        type = 'equilibrium';
    }

    const correctness = direction === type ? 'correct' : 'incorrect';
    document.querySelector('.instruction-box p').textContent = getRandomFeedback(type, correctness);
}

const feedbackMessages = {
    into: {
        correct: [
            "Exactly right! Sodium ions move into the cell due to a lower concentration inside.",
            "Well done! You've correctly identified that sodium ions will move into the cell to balance the concentration.",
            "Spot on! The chemical gradient directs sodium ions into the cell in this scenario."
        ],
        incorrect: [
            "Not quite. Remember, sodium ions move towards lower concentration areas, which in this case would be inside the cell.",
            "Almost there! The key is identifying where the concentration is lower. For sodium ions, it's moving into the cell.",
            "Close, but the direction of sodium ion movement is towards the inside of the cell due to the concentration gradient."
        ]
    },
    out: {
        correct: [
            "Correct! With a higher concentration inside, sodium ions will naturally move out of the cell.",
            "You got it! The sodium ions are moving out to equalize the concentrations across the membrane.",
            "Right on target! The chemical gradient pushes sodium ions out of the cell."
        ],
        incorrect: [
            "Think again! Sodium ions move from higher to lower concentration, meaning out of the cell in this case.",
            "Nearly there! The sodium ions should move out of the cell to balance the concentration gradient.",
            "Almost! Remember, ions like sodium move to where the concentration is lower, which is outside the cell here."
        ]
    },
    equilibrium: {
        correct: [
            "Precisely correct! No net movement because sodium ion concentrations are balanced on both sides.",
            "Excellent observation! At equilibrium, there's no gradient to drive sodium ions in any particular direction.",
            "Spot on! Equilibrium means sodium ions don't move across the membrane due to equal concentrations."
        ],
        incorrect: [
            "Actually, at equilibrium, there's no chemical gradient driving the movement of sodium ions.",
            "Not exactly. Equilibrium means concentrations are the same inside and out, so no movement.",
            "Close, but equilibrium indicates that sodium concentrations are balanced, resulting in no net movement."
        ]
    }
};

let currentInstructionIndex = 0;
const instructionSections = [
    "Welcome to the BMS206 Chemical Gradient Explorer. Here you can test your understanding of chemical gradients.",
    "The program is designed to be used after you have completed Clinic 1 (Equilibrium Potential).",
    "You will be presented with a cell and it's inner and outer Na+ ion concentrations.",
    "Using the button 'Into the cell' and 'Out of the cell' indicate which way the Na+ ions will move down its chemical gradient",
    "If you think the cell is at equilibrium simply press the 'At equilibrium' button",
    "After each submission, you'll receive feedback based on your response",
    "Clicking on new question will change the Na+ ion concentrations",
    "If you have feedback or issues using this program please post of the LMS Forums",
    "To see these instructions again simply press 'See instructions' Good Luck!",
];

function updateInstructionText() {
    if (currentInstructionIndex >= instructionSections.length - 1) {
        //hide the "Next" button if at the end of the instructions.
        document.getElementById('next-button').style.display = 'none';
    } else {
        // Ensure the "Next" button is visible if we are not at the end.
        document.getElementById('next-button').style.display = 'inline-block'; 
    }
    // Update the instruction text to the current section.
    document.querySelector('.instruction-box p').innerHTML = instructionSections[currentInstructionIndex];
    // Only increment the index if it's not a reset action triggered by "See Instructions".
        if (event && event.target.id === 'see-instructions-btn') {
        } else {
        currentInstructionIndex++;
    }

}

document.getElementById('next-button').addEventListener('click', updateInstructionText);


function getRandomFeedback(type, correctness) {
    const messages = feedbackMessages[type][correctness];
    return messages[Math.floor(Math.random() * messages.length)];
}

document.getElementById('see-instructions-btn').addEventListener('click', function() {
    currentInstructionIndex = 0; // Reset the instruction index to the beginning
    updateInstructionText(); // Call the function to update the text based on the reset index
})

updateInstructionText();
