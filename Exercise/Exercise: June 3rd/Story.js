// Story data
const story = [{
    text: "You find yourself in a dark, abandoned mansion. What do you do?",
    options: [
        { text: "Explore the ground floor", next: 1 },
        { text: "Head upstairs", next: 2 }
    ]
},
{
    text: "You hear eerie whispers coming from the living room. What do you do?",
    options: [
        { text: "Investigate the living room", next: 3 },
        { text: "Ignore the whispers and move to the kitchen", next: 4 }
    ]
},
{
    text: "You find an old, dusty bedroom upstairs. What do you do?",
    options: [
        { text: "Search the bedroom", next: 5 },
        { text: "Check the attic", next: 6 }
    ]
},
{
    text: "You see a ghostly figure in the living room. Game over!",
    options: [
        { text: "Start over", next: 0 }
    ]
},
{
    text: "In the kitchen, you find a hidden key. You escape! Congratulations, you win!",
    options: [
        { text: "Start over", next: 0 }
    ]
},
{
    text: "You find an old diary telling a tale of horror. What's your next move?",
    options: [
        { text: "Read the diary", next: 7 },
        { text: "Leave the bedroom", next: 1 }
    ]
},
{
    text: "In the attic, you find a locked chest. You hear footsteps behind you. Game over!",
    options: [
        { text: "Start over", next: 0 }
    ]
},
{
    text: "The diary reveals a hidden passage to escape. Congratulations, you win!",
    options: [
        { text: "Start over", next: 0 }
    ]
}
];

let currentLevel = 0;

function displayStory(level) {
    const storyDiv = document.getElementById("story");
    storyDiv.innerHTML = `<p>${story[level].text}</p>`;
    story[level].options.forEach((option, index) => {
        storyDiv.innerHTML += `<button onclick="makeChoice(${index}, ${option.next})">${option.text}</button>`;
    });
}

function makeChoice(choiceIndex, nextLevel) {
    currentLevel = nextLevel;
    displayStory(nextLevel);
}

// Start the game
displayStory(0);