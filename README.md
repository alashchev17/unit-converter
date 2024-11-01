# Unit Converter

This project is a simple unit converter that allows users to convert between Celsius and Fahrenheit, as well as Miles and Kilometers. The application is built using HTML, CSS, and JavaScript, and it stores the calculation history in `localStorage`.

## Features

- Convert Celsius to Fahrenheit and vice versa.
- Convert Miles to Kilometers and vice versa.
- Store and display a history of calculations.
- Animate the addition of new history items.
- Handle form submissions via button click or Enter key press.

## Key Obstacles Encountered

1. **History Management**:
   - Initially, the history section was designed to display only the latest calculation. We had to modify the logic to store and display a stack of calculations, ensuring that the history list accurately reflects all past conversions.
2. **Animation of History Items**:

   - Implementing animations for newly added history items required careful management of CSS classes and JavaScript timeouts. We had to ensure that only the newly added item gets the animation effect, without reanimating the entire list.

3. **Handling Empty History**:
   - We needed to ensure that the history section displays a "No calculations yet." message when there are no calculations. This required additional checks in the rendering logic to maintain the correct appearance.

## Setup

To set up the project, simply clone the repository and open the `index.html` file in your web browser.

```bash
git clone <repository-url>
cd unit-converter
open index.html
```

## Usage

1. Open the `index.html` file in your web browser.
2. Enter a value in one of the input fields and click the corresponding button to convert the value.
3. The result will be displayed in the history section.
4. The history section will store and display all previous calculations.

## Repository

- [Source code](https://github.com/alashchev17/unit-converter)
- [Live Demo](https://alashchev17.github.io/unit-converter/)

## Course Information

This project is a part of the [Harbour.Space University](https://harbour.space) course [Programming Interactivity](https://harbour.space/front-end-development/courses/programming-interactivity-p%C3%A1la-ogn-stef%C3%A1nsd%C3%B3ttir-1139).
