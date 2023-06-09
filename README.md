# General Knowledge Quiz

Users who like to challenge themselves on broad themes are the target audience for this website. Users can assess their level of knowledge about the world in general by answering a variety of questions that are related to seemingly random themes. It is a good way for them to learn something new and intriguing while also refreshing their memories.

[View my live project here!](https://dinakidane.github.io/js-quiz/)

![Responsive Image](./assets/images/responsive.png)

## Contents table

* [User Experience](#user-experience) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowledgements](#acknowledgements)

## User Experience

### Target Audience

- This game is for those who want to play a challenging, but also enjoyable quiz that would test their general knowledge.

### User stories

- Every user is able to:
  - They are able to understand the main aim of the game
  - They are made aware that there are 10 questions to answer
  - They are able to understand how to naviagte through the game as the instructions are on the first page
  - They are able to restart the game whenever they feel like they want to 
  - They are able to see which answer was correct as soon as they click on their chosen answer
  - They are able to see their score at the end of the game, alongside a message that depends on the score they achieve
  - If they want to play the quiz again, they are able to go back to the instructions/first page by clicking 'Play again', after their score is revealed to them 
 
## Features

### Existing Features

- __The Heading__
  
    - The 'General Knowledge Quiz' heading has been prominently displayed at the top of the box, making it easily visible to users. 
    - The heading stays bold and consistent on every page, allowing it to grab the user's attention.
  
    - ![Heading](./assets/images/heading.png)

- __The Instructions__

    - The purpose for this section allows every user to understand how to navigate through the game which allows the process of the game to be much easier, quicker and more enjoyable for the user to play

    - ![Instructions](./assets/images/instructions.png)

- __Game Area__

    - This section will contain the question below the main heading. 
    - The section below the questions will contain 4 different answers, and the user is able to click an option that they think is the correct answer.
    - If their answer is correct, it'll come up green.
    - If their answer is incorrect, it'll come up red and simultaneously, the correct answer will come up green.

    - ![Game Area](./assets/images/game.png)

- __Score Area__

    - This section enables the user to see how many answers they got correct out of 10, which is the number of questions that was asked.
    - Following the score reveal, a message is also revealed to the user depending on the score that they get

    - ![Score Area](./assets/images/score.png)

### Features left to implement

- Potentially, including a timer element on every question could have made answering the question within the allotted time more challenging and perhaps even more enjoyable for the user.

## Design

### Colour Scheme

* The colour scheme was motivated by the intention to make sure the quiz delivers a fun and playful feel towards the user.
* The contrasts between the light and dark purple is used to display a consistent theme throughout every page.
* While presenting a minimalistic and straightforward layout, the white background draws the user's attention to the Quiz box area.
* The heading and the question are black and bold, distinguishing it from the rest of the text to indicate they are headings of the text below.
  * ![Colour scheme](./assets/images/game.png)
* To indicate a correct answer, the colour green comes up. To indicate an incorrect answer, the colour red comes up. These colours have been chosen as they are universally known to be colours that indicate and differentiate a right answer from a wrong answer. For those who were not aware, it is already proposed in the 'How to play' section. 
  * ![Answers](./assets/images/answers.png)

### Typography

* Using the Arvo font style throughout the game was intentional to ensure a modern feel was emphasised throughout the website.
* The Arvo font also allowed a clear read for the reader, whilst maintaing a minimilist feel.

### Wireframes

* Desktop

  * ![Desktop Wireframe](./assets/images/desktop-wireframe.png)

* Tablet

  * ![Tablet Wireframe](./assets/images/tablet-wireframe.png)

* Smartphone

  * ![Smartphone Wireframe](./assets/images/smartphone-wireframe.png)

## Testing

### Validator Testing

- [Testing for HTML](https://validator.w3.org/#validate_by_input)
  
  - No errors were detected
  - ![HTML Validator](./assets/images/html-validator.png)

- [Testing for CSS](https://jigsaw.w3.org/css-validator/#validate_by_input)

  - No errors were detected
  - ![CSS Validator](./assets/images/css-validator.png)

- [Testing for Javascript](https://jshint.com/)

  - No errors were found when passing through the official Jshint validator
  - The metrics:
    - There are 12 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 8 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 3 while the median is 2

- Browser Compatibility

  - Tested on:
    - Google Chrome on macOS 110.0.5481.177
    - Safari on macOS X 10.11 El Capitan
    - Microsoft Edge Version 110.0. 1587.41

- Screen Responsiveness

- ![Screen Responsiveness Test](./assets/images/screen-responsiveness.png)

- Functionality Testing

    - ![Testing Features](./assets/images/features-testing.png)

- Bugs
  
    - Currently no known bugs

## Technologies Used

### Languages Used

- HTML
- CSS
- Javascript

### Frameworks, Libraries & Programs Used

  - [Google Fonts](https://fonts.google.com/) was the website where the Arvo font style was found, which meant that this link was also imported onto the style.css file.
  - [Git](https://git-scm.com/) allowed for the code to be committed and pushed to github.
  - [Github](https://github.com/) All the code that had been pushed were stored in github.
  - [Responsiveness](https://www.websiteplanet.com/webtools/responsive-checker/#body) was used to check the screen responsiveness in various different types of screens, ranging from desktops to mobile phones.
  - [Balsamiq](https://balsamiq.com/) was used to make wireframes to help aid the design process.

## Deployment

### How the site was deployed
  
- Click on the repository
- Click on settings and then scroll to the pages menu
- Click 'Deploy from branch'
- Click 'main' branch
- This is the live link: [General Knowledge Quiz!](https://dinakidane.github.io/js-quiz/)

### How the repository was cloned

- Go to the [repository](https://dinakidane.github.io/js-quiz/) on github
- Click 'code' on the right part of the page
- Click copy which is code that appears on the HTTPS section
- Open a GitBash terminal
- Go to the directory you wish to paste the clone link in
- Type 'git clone' in the terminal and paste it in
- Click enter to start the process of cloning the repository 

## Credits

### Content

- [General Knowledge Quiz Questions:](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates) This was used to inspire some of the general knowledge quiz questions in the game.

### Code

- [Building a Javascript game:](https://www.youtube.com/watch?v=PBcqGxrr9g8): This video was used as inspiration to build a quiz game and also present a clear and neat layout of the code, specifically in the Javascript file. 
- [Creating a quiz app:](https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript) This was used to help with the layout of the code.
- [Stack Overflow:](https://stackoverflow.com/questions/39989270/redisplay-div-after-display-none) This was used to help add in a code that would hide a specific section until a certain button was clicked.
- [Colour code:](https://www.w3schools.com/cssref/css_colors.php) This was used to check if the correct colour code was used.

### Media
- [Google Fonts:](https://fonts.google.com/) This was used to find an appropiate font for the quiz and then it was imported from here.

## Acknowledgements

- My mentor, Elaine Broche, was always giving me the best and most constructive feedback that i was able to utilise to ensure that I put all my efforts into this, so a big thank you to her! Although it was challenging at most points, I was also able to rely on Slack and tutor support to always come through for me. They were always happy to give me advice and feedback to help improvemy work. Thanks to all who made this journey easier for me.  
