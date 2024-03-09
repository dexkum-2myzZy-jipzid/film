import martialArts from "../../../assets/martial-arts.jpg";
import pirate from "../../../assets/pirate.jpeg";
import animated from "../../../assets/animated.jpeg";
import comdey from "../../../assets/comdey.jpeg";
import drama from "../../../assets/drama.jpeg";
import fantasy from "../../../assets/fantasy.jpeg";
import historical from "../../../assets/historical.jpeg";
import horror from "../../../assets/horror.jpeg";
import musical from "../../../assets/musical.jpeg";
import noir from "../../../assets/noir.jpeg";
import romance from "../../../assets/romance.jpeg";
import fiction from "../../../assets/fiction.jpeg";
import thriller from "../../../assets/thriller.jpeg";
import western from "../../../assets/western.jpeg";

const genres = [
  {
    title: "Action",
    description:
      "Associated with particular types of spectacle, like explosions, chases, and combat.",
    examples: [
      "Commando (1985)",
      "Die Hard (1988)",
      "Face/Off (1997)",
      "The Last Samurai (2003)",
    ],
    src: martialArts,
  },
  {
    title: "Adventure",
    description:
      "Defined by a journey, often including pursuit, in a fantasy or exotic setting.",
    examples: [
      "Swiss Family Robinson (1960)",
      "Romancing the Stone (1984)",
      "Stardust (2007)",
      "Jungle Cruise (2021)",
    ],
    src: pirate,
  },
  {
    title: "Animated",
    description:
      "Film's images primarily created by computer or hand, characters voiced by actors",
    examples: [
      "Snow White and the Seven Dwarfs (1937)",
      "Toy Story (1995)",
      "Spirited Away (2001)",
      "Wallace & Gromit: The Curse of the Were-Rabbit (2005)",
    ],
    src: animated,
  },
  {
    title: "Comedy",
    description: "Primarily intended to make the audience laugh.",
    examples: [
      "Safety Last! (1923)",
      "Some Like It Hot (1959)",
      "Monty Python's Life of Brian (1986)",
      "Superbad (2007)",
    ],
    src: comdey,
  },
  {
    title: "Drama",
    description:
      "Focused on emotions and conflict, often looking to reality rather than sensationalism",
    examples: [
      "The Grapes of Wrath (1940)",
      "Citizen Kane (1941)",
      "The Shawshank Redemption (1994)",
      "Changeling (2008)",
    ],
    src: drama,
  },
  {
    title: "Fantasy",
    description:
      "Defined by situations that transcend natural laws and/or settings in a fictional universe.",
    examples: [
      "The Wizard of Oz (1939)",
      "Willy Wonka & the Chocolate Factory (1971)",
      "Harry Potter and the Philosopher's Stone (2001)",
      "The Lord of the Rings: The Fellowship of the Ring (2001)",
    ],
    src: fantasy,
  },
  {
    title: "Historical",
    description:
      "Provide accurate historical accounts or fictional narratives in historical settings.",
    examples: [
      "Cleopatra (1963)",
      "Schindler's List (1993)",
      "Gladiator (2000)",
      "The Butler (2013)",
    ],
    src: historical,
  },
  {
    title: "Horror",
    description:
      "Seek to elicit fear or disgust in the audience for entertainment purposes.",
    examples: [
      "Frankenstein (1931)",
      "Night of the Living Dead (1968)",
      "The Exorcist (1973)",
      "Shaun of the Dead (2004)",
    ],
    src: horror,
  },
  {
    title: "Musical",
    description:
      "Songs performed by characters are interwoven into the narrative, sometimes with dancing.",
    examples: [
      "Singin' in the Rain (1952)",
      "West Side Story (1961)",
      "The Rocky Horror Picture Show (1975)",
      "Moulin Rouge! (2001)",
    ],
    src: musical,
  },
  {
    title: "Noir",
    description:
      "Stylish crime dramas, reflecting American society and culture in the 1940s and '50s",
    examples: [
      "Rebecca (1940)",
      "Laura (1944)",
      "Chinatown (1974)",
      "Who Framed Roger Rabbit (1988)",
    ],
    src: noir,
  },
  {
    title: "Romance",
    description:
      "Emphasis on passion, emotion, and romantic involvement of the main characters",
    examples: [
      "Gone with the Wind (1939)",
      "Casablanca (1942)",
      "When Harry Met Sally... (1989)",
      "Ghost (1990)",
    ],
    src: romance,
  },
  {
    title: "Science fiction",
    description:
      "Combines imaginative speculation with a scientific or technological premise",
    examples: [
      "2001: A Space Odyssey (1968)",
      "Star Wars (1977)",
      " Back to the Future (1985)",
      " Gravity (2013)",
    ],
    src: fiction,
  },
  {
    title: "Thriller",
    description:
      "Evoke excitement and suspense in the audience, often through menacing situations",
    examples: [
      "M (1931)",
      " Deliverance (1972)",
      " Fight Club (1999)",
      "Runaway Jury (2003)",
    ],
    src: thriller,
  },
  {
    title: "Western",
    description: "Films set in the American West during the 19th century",
    examples: [
      "Stagecoach (1939)",
      "The Good, the Bad and the Ugly (1966)",
      "True Grit (1969)",
      "Tombstone (1993)",
    ],
    src: western,
  },
];

export default genres;
