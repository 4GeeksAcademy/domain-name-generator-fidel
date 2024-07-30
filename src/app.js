
// Big arrays, works too
// const pronoun = ["the", "our", "my", "your"];
// const adj = ["great", "big", "tremendous", "trusty"];
// const noun = ["jogger", "racoon", "dog"];
// const domain = [".com", ".es", ".us"];

// Small array, just to see all the items on console :)
const pronoun = ["The", "My", "Your"];
const adj = ["tremendous", "trusty"];
const noun = ["racoon", "dog"];
const domain = [".com", ".es"];

let nameSelected = "";
let domainName = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
       
        nameSelected = `${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`;
        domainName.push(nameSelected);
      }
    }
  }
}
console.log(domainName); // eslint-disable-line no-console
