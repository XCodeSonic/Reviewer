const correctPassword = "LoydPogiReviewer"; // Set your correct password here

// Select elements
const passwordContainer = document.getElementById("passwordContainer");
const quizContainer = document.getElementById("quizContainer");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const submitPasswordButton = document.getElementById("submitPassword");

const questions = [
    { question: "According to W. Brian Arthur (2009) technology is define in 3 ways except.", answer: "No Answer" },
    { question: "This refers to an individual's own principles regarding right and wrong.", answer: "No Answer" },
    { question: "They are the material artifacts in anthropological term or hardware in engineering term, produced by a person or group or persons.", answer: "Technics" },
    { question: "The capacity to enjoy the freedom to do things as long as you do not trample the rights of others.", answer: "Good Life" },
    { question: "A British in 1527 who made the first attempt to outline the ideal relationship between STS in which he was able to publish in his book The New Atlantis.", answer: "Francis Bacon" },
    { question: "An example that knowledge was based on craft rather that science is.", answer: "Pyramid of Egypt" },
	{ question: "The (3) concerns on the importance of S&T in contemporary society are the following except", answer: "Political Power" },
    { question: "The Penicillin was discovered in.", answer: "1928" },
	{ question: "The civilization during Mesoamerican Period (1200 B.C. - 3rd Century A.D.) in which the top of the society are priest and nobles who lived in ceremonial centers.", answer: "Olmecs" },
    { question: "The highest honor given by the President of the Philippines is the national scientist and among 41 national scientist there were only how many were conferred.", answer: "4" },
    { question: "According to Carl Rogers it is a process, not a state of being and a direction, not a destination.", answer: "Good Life" },
    { question: "The Phil s a prosperous middle-class society where no one is poor. People live long, andhealthy lives, smart, and innovative. ", answer: "2040" },
    { question: "The civilization during Mesoamerican Period (1200 B.C. - 3rd Century A.D.) in which they introduced algebra in solving equation and has contribution to geography due to the teachings in their religion.", answer: "Middle East" },
    { question: "Division of the preconscious that drives a socially acceptable way to satisfy the demands of the ID as it operates the conscious and unconscious mind.", answer: "Ego" },
	{ question: "The pillars of development includes the following except.", answer: "Pagtulungan" },
	{ question: "The invention of telegraph by Samuel Morse (1791-1972) and Alexander Graham Bell (1847-1922) who patented the 1st telephone occurs during.", answer: "First Modern Information Revolution" },
	{ question: "The civilization during Mesoamerican Period (1200 B.C. - 3rd Century A.D.) in which they built chinamps or floating gardens to plant crops.", answer: "Aztecs" },
	{ question: "The aspects in achieving a strong nation are the following except.", answer: "Building an econimic entity" },
	{ question: "A department in the Phil. government responsible for implementing industry-focused (Blurred)", answer: "No Answer" },
	{ question: "The world's first national-scale assessment of damage to coral reefs resulting in international conservation initiatives like Global reefs and Risk Analysis etc. was conceptualized by.", answer: "Edgardo D. Gomez" },
	{ question: "The development in S&T during the ancient period where ca 2500 Chinese doctors begin using acupuncture.", answer: "Asia and Oceania" },
	{ question: "The principles of morality that drives man to become socially responsible and behaves in acceptable manner", answer: "Super-Ego" },
	{ question: "The following are the characteristics of science except.", answer: "Relies in hearsays" },
	{ question: "It is the human race, which includes everybody on earth.", answer: "No Answer" },
	{ question: "It is systematic study which is concerned with evidences and theories", answer: "Science" },
	{ question: "The correctly applying a norm, premise, rule, standard or law", answer: "Right Action" },
	{ question: "The application of scientific knowledge (applied science) to achieve a particular goal", answer: "No Answer" },
	{ question: "It consist of people who live in a specific territory, interact with one another, and share many elements of common culture.", answer: "society" },
	{ question: "A body or reservoir of skills and knowledge by which we control and modify its systems, processes and developments in the world.", answer: "Technology" },
	{ question: "It refers to all activity concerened with developing new scientific knowledge, new products and processes and it is a measure of the effort being put into S&T.", answer: "Research and Development" },
	{ question: "It is the study of the ways in which technical and social phenomena interact and influence each other.", answer: "Science, Technology and Society" },
	{ question: "Involves having the character and personal qualities that were justified by reason as having moral worth according to aristotle.", answer: "Being Good" },
	{ question: "Serves as the blueprint of programs and administrations plan for progress", answer: "No Answer" },
	{ question: "Ways to define technology as means to an end (Causality) are the following except.", answer: "Moral Cause" },
	{ question: "Pioneered some medical practices like false teeth installation, filling dental cavities, broken bone setting, bone traction, vaccination, brain surgery, skin grafting and autopsy", answer: "African Revolution" },
	{ question: "Believes technology can alleviate all difficulties of life and can provide solutions for problems that may come", answer: "Technological Optimism" },
	{ question: "Connects to the period of Middle ages to modern history is.", answer: "Renaissance Period" },
	{ question: "The Sustainable Alternative Lighting, an environmental-friendly lamp was discovered by. ", answer: "Aisa Mijeno" },
	{ question: "Radioactivity was discovered in 1896 by.", answer: "No Answer" },
	{ question: "It is the transfer of doing work by human hands and feet to the use of machines.", answer: "No answer" },
	{ question: "The development in S&T during the ancient period where ca 900 Farmers in Mesopotamia use an irriation system to water crops.", answer: "Africa and the Middle East" },
	{ question: "Comrises Eros, the life or survival instinct of man and Thanatos the death or destructive instinct of man.", answer: "ID" },
	{ question: "A department in the Phil. government responsible for providing central direction, leadership and coordination of all scientific and technological activities, formulating policies, programs, projects to support the national development.", answer: "No Answer" },
	{ question: "Technology is progressive and beneficial in many ways, also doubtful in many ways and a way of life(Technological Pessimism) according to.", answer: "No Answer" },
	{ question: "It refers to man as being focuses to what of human existence", answer: "No Answer" },
	{ question: "Development in S&T during the ancient period where ca 10,000 people in Palestine build houses from sun-dried bricks.", answer: "Africa and the Middle East" },
	{ question: "Known as Dark Ages because of few written records from the said era and start of the first revolution", answer: "Medieval Period" },
	{ question: "The continuous bringing forth of the concealed into unconcealment.", answer: "No Answer" },
	{ question: "Being good entails nurturing character and fostering relationship according to.", answer: "No Answer" },
	{ question: "Greater advancement in technology and adaptation od Eastern technologies in the West like invention of vertical windmills, spectacles, mechanical clocks, greatly improves water mills,building techniques like Gothic style, and three-field crop rotation occurred during the.", answer: "No Answer" },
	{ question: "It consist of what can be retrieved from memory", answer: "Pre-conscious mind" },
	{ question: "Made his research on the ecology and diversity of Phil amphibians and reptiles and conservation of marine-protected area.", answer: "Angel C. Alcala Ph.D." },
	{ question: "The period where the banaue Rice Terraces was created which is one of the finwest product (blurred) of engineering", answer: "Pre-Spanish Era" },
	{ question: "It refers to the development of behaviors, values, language, institutions, and physical structure that elucidate history and culture, concretize and protect the present, and insure (blurred) future indentity and independence of nation.", answer: "Nation-Building" },
	{ question: "Invention of artificial Intelligence in which there is the capacity of the computer ro perform humanlike intellectual processe in.", answer: "No Answer" },
	{ question: "How to live an authentic life rather that dealing with good life and meaningful existence means the meaning of good life according to", answer: "Heidegger's View" },
	{ question: "R.A. 9367 - biofuels act that promotes the development and usage of biofuels throughout the country was enacted during.", answer: "Fifth Republic" },
	{ question: "It consists of primitive desires, wishes or impulse which is mediated by the preconscious mind.", answer: "Subconscious Mind" },
	{ question: "He studied on the culture of seaweed species that benefited the livelihood of coastal populations.", answer: "Gavino C. Trono Ph.D." },
	{ question: "In 1968 technology recognized as the top reason in economic develoment and extra funds given to support projects in applied science and science education during.", answer: "Marcos Era" },
	{ question: "The idea of good life is pleasure according to.", answer: "Hedonism" },
	{ question: "The department in the Phil government that is responsible to formulating development plans and regarded as the country's premier socioeconiomic planning body", answer: "No Answer" },
	{ question: "Introduced formal education and established colleges universities and made contributions in field of engineering like constructing roads, bridges, churches, government establishments.", answer: "No Answer" },
	{ question: "World Wide Web was created in.", answer: "1989" },
	{ question: "Science was inclined to agriculture, food processesing Forestry, medicine, and pharmacy.", answer: "No answer" },
	{ question: "The section in 1987 Constitution, Article XIV Sec. provided protection of rights of scientist, Inventors, artist, and other gifted citizens to their intellectual property.", answer: "13" },
	{ question: "Good life is peace of mind though minimizing desires and passions according to.", answer: "Stoicism" },
	{ question: "A period in Europe in the 18th century when many writers and thinkers began to question established beliefs", answer: "Age of Enlightenment" }
];

let currentQuestionIndex = 0;

// Event listener for password submission
submitPasswordButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        // If password is correct, hide the password section and show the quiz
        passwordContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
    } else {
        // If password is incorrect, show error message
        passwordError.classList.remove("hidden");
    }
});

// Quiz functionality
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showAnswerButton = document.getElementById("showAnswer");
const nextQuestionButton = document.getElementById("nextQuestion");

showAnswerButton.addEventListener("click", () => {
    answerElement.textContent = questions[currentQuestionIndex].answer;
    answerElement.classList.remove("hidden");
});

nextQuestionButton.addEventListener("click", () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    questionElement.textContent = questions[currentQuestionIndex].question;
    answerElement.textContent = "";
    answerElement.classList.add("hidden");
});
