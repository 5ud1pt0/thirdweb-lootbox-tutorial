export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Which alien is from the species called Tetramand?",
    image:
      "https://lh3.googleusercontent.com/5Kz56Bv2xE5lxCySBlxTGObsw5J8NZzlx3uHNPR207eWm2HmrqplCQG4nUDuRkPxlJtEDHvuF6EuvnD8gTQTDM5gK_cy-Qmjl6ExWw=s0",
    answers: [
      "Rath",
      "Four Arms",
      "Grey Matter",
      "Eye Guy",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What's the name of this silicon-based lifeform from the planet Petropia?",
    image: "https://lh3.googleusercontent.com/zBAD3-lo_Ugecwbj8wbGWQk7Mqr_sS7UKlDJwDGELXr1gbGJk6OMJutD_1oat9hENzm66FOXkP9ieDIRPjEbFczejnhGQdzdrwpM=s0",
    answers: ["Upgrade", "Frankenstrike", "Arcticguana", "Diamond Head"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Do you know which of these is called a Vulpimancer?",
    image:
      "https://lh3.googleusercontent.com/6iEmxNJqQC5PlccOFYZmP5uf8TrDw1T9BVApHBA95pFw7Y3Wqc1dxcAZ9OtkEXHqYgpgOix_UdEw7QQqXuU4M-2sLoX8tSutqBpj=s0",
    answers: ["Wildmutt", "Cannonbolt", "Brainstorm", "Big Chill"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Which alien's powers are speed based?",
      image:
      "https://lh3.googleusercontent.com/slgOpZJo3rmwdTrmz-Ov5vBfcnc-HU2jMvsmlyCQNS1AaQqNpny_wpsoXudiXqvyuitk6bhY3aVaRqn9-XzDlUcoypyoobJFfczI=w600",
    answers: ["Jetray", "Four Arms", "XLR8", "Grey Matter"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "This alien's arms transform into tentacles. What is it?",
    answers: ["Eye Guy", "Nanomech", "Rocks", "Gax"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
