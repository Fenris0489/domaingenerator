let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];

pronoun.map((pronouns) => adj.map((adjective) => noun.map((nouns) => extension.map((ext) => {
  return console.log(`${pronouns}${adjective}${nouns}${ext}`)
}))))

