const pronoun = ["the", "our", "my", "your"];
const adj = ["great", "big", "tremendous", "trusty"];
const noun = ["jogger", "racoon", "dog"];
const domain = [".com", ".es", ".us"];

let domainName = "";
let allDomain = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        domainName = `${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`;
        allDomain.push(domainName);
      }
    }
  }
}
console.log(allDomain); // eslint-disable-line no-console
