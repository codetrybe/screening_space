# Random Meme Generator

This is a simple random meme generator that fetches wholesome memes from the Meme API and displays them on a webpage. The generated memes come with a title and the author's name.

## Usage

To use the random meme generator, follow these steps:

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Generate Meme" button to fetch a random meme from the API.
4. The meme image, title, and author's name will be displayed on the webpage.

## Code Explanation

The generator uses HTML, CSS, and JavaScript to create a simple user interface and fetch memes from the API. Here's an overview of the code:

### HTML Structure

The HTML structure consists of a `div` container with the class name "meme-generator". Inside the container, there is a "Generate Meme" button, a heading for the meme title, an `img` element for the meme image, and a `div` element for the meme author's name.

### CSS Styling

The CSS styles defined in the `style.css` file are responsible for the visual appearance of the meme generator. The styles include font settings, button design, image size, and other layout properties.

### JavaScript Functionality

The JavaScript code in the `main.js` file handles the functionality of the meme generator. It selects the necessary HTML elements using `querySelector` and defines the `updateDetails` function to update the meme image, title, and author's name.

The `generateMeme` function is triggered when the "Generate Meme" button is clicked. It uses the `fetch` function to make an HTTP request to the Meme API and retrieves a random meme. The response is then converted to JSON format and the `updateDetails` function is called to update the displayed meme details.

The `generateMeme` function is also called initially to display a meme when the page is loaded.

## Dependencies

The random meme generator relies on the following dependencies:

- None

## Browser Compatibility

The code is compatible with modern web browsers that support HTML5, CSS3, and ECMAScript 6 (ES6) standards.

## Conclusion

The random meme generator provides a fun way to fetch and display wholesome memes from the Meme API. Feel free to customize the code and add more features to enhance the meme-generating experience. Happy meme browsing!

