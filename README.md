# General Knowledge Quiz

Users who like to challenge themselves on broad themes are the target audience for this website. Users can assess their level of knowledge about the world in general by answering a variety of questions that are related to seemingly random themes. It is a good way for them to learn something new and intriguing while also refreshing their memories.

[View my live project here!](https://dinakidane.github.io/js-quiz/)

![Responsive Image](./assets/images/responsive.png)

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

## Testing

### Validator Testing

- 
  - The closing unordered list element was missing on line 93 in index.html
  - The closing footer element wasn't aligned under the opening footer properly

  - All errors have now been fixed - The result for index.html, menu.html and register.html:
    - ![Html validator](./assets/images/w3c-validator.png)

- [W3C Testing for CSS](https://jigsaw.w3.org/css-validator/#validate_by_input)
  - There was an error that declared that position: left was not a valid value.
  - All errors have now been fixed:
    - ![CSS validator](./assets/images/w3c-css.png)

### Validator Testing

- [Testing for HTML](https://validator.w3.org/#validate_by_input)
  
  - No errors were detected
  - ![HTML Validator](./assets/images/html-validator.png)

- [Testing for CSS](https://jigsaw.w3.org/css-validator/#validate_by_input)

  - No errors were detected
  - [CSS Validator](./assets/images/css-validator.png)

- [Testing for Javascript](https://jshint.com/)

  - No errors were found when passing through the official Jshint validator
  - The metrics:
    - There are 12 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 8 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 3 while the median is 2
