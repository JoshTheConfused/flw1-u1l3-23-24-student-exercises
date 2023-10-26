// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName1 = "Giant Spider";

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription1 = "A Giant Spider which can fire its web to immobilize threats and catch prey. It has large, powerful mandibles, primarily adapted for predation, but which are equally capable of defense.";

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly1 = true;

let isFriendly1String;
if (isFriendly1) {
  isFriendly1String = "Yes";
}
else {
  isFriendly1String = "No";
}

// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = Math.floor(Math.random() * 60 + 1);

// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit1 = visitorAge > 15;

let canVisit1String;
if (canVisit1) {
  canVisit1String = "Yes";
}
else {
  canVisit1String = "No";
}

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
let creatureName2 = "";

let creatureDescription2 = "";

let isFriendly2 = true;

let isFriendly2String;
if (isFriendly2) {
  isFriendly2String = "Yes";
}
else {
  isFriendly2String = "No";
}

let canVisit2 = visitorAge > 0;

let canVisit2String;
if (canVisit2) {
  canVisit2String = "Yes";
}
else {
  canVisit2String = "No";
}

let zooSummary2 = "Name: " + creatureName2 + ".\nDescription: " + creatureDescription2 + "\nHuman Friendly? " + isFriendly2String + ".\nIs the Visitor Allowed? " + canVisit2String + ".";

//All info for creature #3
let creatureName3 = "";

let creatureDescription3 = "";

let isFriendly3 = true;

let isFriendly3String;
if (isFriendly3) {
  isFriendly3String = "Yes";
}
else {
  isFriendly3String = "No";
}

let canVisit3 = visitorAge > 0;

let canVisit3String;
if (canVisit3) {
  canVisit3String = "Yes";
}
else {
  canVisit3String = "No";
}

let zooSummary3 = "Name: " + creatureName3 + ".\nDescription: " + creatureDescription3 + "\nHuman Friendly? " + isFriendly3String + ".\nIs the Visitor Allowed? " + canVisit3String + ".";

let allZooSummaries = "Creature 1:\n" + zooSummary1 + "\n\nCreature 2:\n" + zooSummary2 + "\n\nCreature 3:\n" + zooSummary3;
  
console.log("Visitor Age: " + visitorAge + ".\n\n" + allZooSummaries);