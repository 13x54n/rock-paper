const possibilities = ["rock", "paper", "scissor"];

const getRandom = () => {
  return Math.floor(Math.random() * 3);
};

export const compareP2PPossibility = async () => {
  const user1 = await getRandom();
  const user2 = await getRandom();

  // User 1 Wins
  if ((user2 !== 0 && user1 > user2) || (user1 == 0 && user2 == 2))
    return ["user1", possibilities[user1], possibilities[user2]];
  // User 2 Wins
  else if ((user1 !== 0 && user2 > user1) || (user2 == 0 && user1 == 2))
    return ["user2", possibilities[user2], possibilities[user1]];
  // Game Draws
  else return ["draw", possibilities[user1], possibilities[user2]];
};

const icons = {
  rock: {
    url: "https://ik.imagekit.io/jckalabs/rock?ik-sdk-version=javascript-1.4.3&updatedAt=1677582124083",
    alt: "Rock",
  },
  paper: {
    url: "https://ik.imagekit.io/jckalabs/paper?ik-sdk-version=javascript-1.4.3&updatedAt=1677582111493",
    alt: "Paper",
  },
  scissor: {
    url: "https://ik.imagekit.io/jckalabs/scissor?ik-sdk-version=javascript-1.4.3&updatedAt=1677582140575",
    alt: "Scissor",
  },
};

export const getResultIcon = (icon) => {
  if (icon === "rock") return icons.rock.url;
  if (icon === "paper") return icons.paper.url;
  if (icon === "scissor") return icons.scissor.url;
};
