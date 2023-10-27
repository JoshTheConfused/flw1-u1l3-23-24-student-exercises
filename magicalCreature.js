// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName1 = "Giant Spider";

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription1 = "A Giant Spider which can fire its web to immobilize threats and catch prey. It has large, powerful mandibles, primarily adapted for predation, but which are equally capable of defense.";

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly1 = true;
let isFriendly1String = isFriendly1 ? "Yes" : "No";

// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = Math.floor(Math.random() * 60 + 1);

// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit1 = visitorAge > 15;
let canVisit1String = canVisit1 ? "Yes" : "No";

// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary1 = "Name: " + creatureName1 + ".\nDescription: " + creatureDescription1 + "\nHuman Friendly? " + isFriendly1String + ".\nIs the Visitor Allowed? " + canVisit1String + ".";

// 7. Print the summary using console.log()

//console.log("Visitor Age: " + visitorAge + ".\n\nCreature 1:\n" + zooSummary1); - removed for challenge steps


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.

//All info for creature #2
let creatureName2 = "Gremlin";

let creatureDescription2 = "An impish creature with a knack for playing rather cruel tricks on humans. NOT to be trusted under any circumstances, and NEVER to be left unattended around the easily guiled.";

let isFriendly2 = false;
let isFriendly2String = isFriendly2 ? "Yes" : "No";

let canVisit2 = visitorAge > 25;
let canVisit2String = canVisit2 ? "Yes" : "No";

let zooSummary2 = "Name: " + creatureName2 + ".\nDescription: " + creatureDescription2 + "\nHuman Friendly? " + isFriendly2String + ".\nIs the Visitor Allowed? " + canVisit2String + ".";

//All info for creature #3
let creatureName3 = "Angel";

let creatureDescription3 = "A very fragile creature. While on Earth, they can pose no danger to humans, though even slight contact between one and a person may prove fatal for the angel. All actions done unto one will be remembered upon the doer's death.";

let isFriendly3 = true;
let isFriendly3String = isFriendly3 ? "Yes" : "No";

let canVisit3 = visitorAge > 18;
let canVisit3String = canVisit3 ? "Yes" : "No";

let zooSummary3 = "Name: " + creatureName3 + ".\nDescription: " + creatureDescription3 + "\nHuman Friendly? " + isFriendly3String + ".\nIs the Visitor Allowed? " + canVisit3String + ".";

//All info for creature #4
let creatureName4 = "Fuzzy Wuzzy";

let creatureDescription4 = "A warm and playful ball of fur. Essentially harmless, as it has been bred for a long time for its fur and meat, though its great size may be a risk for very small children.";

let isFriendly4 = true;
let isFriendly4String = isFriendly4 ? "Yes" : "No";

let canVisit4 = visitorAge > 5;
let canVisit4String = canVisit4 ? "Yes" : "No";

let zooSummary4 = "Name: " + creatureName4 + ".\nDescription: " + creatureDescription4 + "\nHuman Friendly? " + isFriendly4String + ".\nIs the Visitor Allowed? " + canVisit4String + ".";

//Creates and prints final message
let allZooSummaries = "Creature 1:\n" + zooSummary1 + "\n\nCreature 2:\n" + zooSummary2 + "\n\nCreature 3:\n" + zooSummary3 + "\n\nCreature 4:\n" + zooSummary4;
console.log("Visitor Age: " + visitorAge + ".\n\n" + allZooSummaries);