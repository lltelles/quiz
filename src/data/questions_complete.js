const data = [
    {
      category: "HTML",
      questions: [
        {
          question: "Which tag creates a paragraph?",
          options: ["<p>", "<h1>", "<text>", "<ul>"],
          answer: "<p>",
          tip: "It's a single-letter tag.",
        },
        {
          question: "Which attribute adds a link to the 'a' tag?",
          options: ["alt", "href", "src", "link"],
          answer: "href",
          tip: "Hyperlink Reference",
        },
        {
          question: "What is the tag for unordered lists?",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          answer: "<ul>",
        },
        {
          question: "Which attribute makes an input mandatory?",
          options: ["placeholder", "value", "required", "maxlength"],
          answer: "required",
        },
        {
          question: "The semantic tag recommended for footnotes is:",
          options: ["div", "main", "section", "footer"],
          answer: "footer",
        },
      ],
    },
    {
      category: "CSS",
      questions: [
        {
          question: "Which rule changes the color of an element?",
          options: ["color", "background-color", "font-size", "transition"],
          answer: "color",
          tip: "Starts with the letter C.",
        },
        {
          question: "To increase the font size of an element, we use:",
          options: ["font", "text-transform", "font-size", "hover"],
          answer: "font-size",
          tip: "Use 'font-size' for changing the element's font size.",
        },
        {
          question: "The position that keeps an element fixed is:",
          options: ["static", "absolute", "fixed", "relative"],
          answer: "fixed",
          tip: "The position that holds an element fixed on the screen is called 'fixed'.",
        },
      ],
    },
    {
      category: "JavaScript",
      questions: [
        {
          question: "What is Vanilla JavaScript?",
          options: [
            "JavaScript only",
            "A JavaScript library",
            "A JavaScript framework",
            "A JavaScript compiler",
          ],
          answer: "JavaScript only",
        },
        {
          question: "Which instruction is used to declare a constant in JavaScript?",
          options: ["const", "let", "var", "define"],
          answer: "const",
        },
        {
          question: "Which of the following data types does not exist in JavaScript?",
          options: ["string", "number", "boolean", "float"],
          answer: "float",
        },
        {
          question: "Which of the following methods selects an element?",
          options: ["querySelector", "parseInt", "sort", "reduce"],
          answer: "querySelector",
        },
        {
          question:
            "Which of these properties gives the number of elements in an array?",
          options: ["qty", "length", "items", "index"],
          answer: "length",
        },
      ],
    },
  ];
  
  export default data;