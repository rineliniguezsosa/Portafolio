- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Requirements](#requirements)
- [Install](#install)
- [Deployment](#deployment)

## My process

I built my personal portfolio using this free design and really enjoyed working on it. Although the original design only included a desktop version, I adapted the mobile version according to my own interpretation.

[Free template here.](https://www.figma.com/design/z3M5BqF2oyqVzMk6Mtfb6c/%F0%9F%8E%A8-Personal-Portfolio-Template-(Community)?node-id=0-1&p=f&t=277MO06jE8a9wOFP-)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwindcss
- Mobile-first workflow
- React typescript

## What I learned

## Useful resources

**DOM properties that I can access using useRef**

1. Style Properties (CSS): You can access and modify style properties directly through the reference.

- style: Access the CSS properties of the element.
- style.height, style.width, style.backgroundColor, etc.

2. Position and Dimensions: Access the dimensions and position of an element in the DOM.

- clientHeight: The height of the element, including padding, but not borders or scrollbars.
- clientWidth: The width of the element, including padding.
- scrollHeight: The total height of the content within the element (including content hidden by scrolling).
- scrollWidth: The total width of the content within the element (including content hidden by scrolling).
- offsetHeight: The height of the element, including border and padding, but not margin.
- offsetWidth: The width of the element, including border and padding, but not margin.
- offsetTop: The distance from the top edge of the element to its relative position relative to the parent element.
- offsetLeft: The distance from the left edge of the element to its relative position relative to the parent element.
- scrollTop: The distance from the top of the content of a scrollable element.
- scrollLeft: The distance from the left edge of the content of a scrollable element.

3. Scrolling Methods: You can manipulate the scrolling of a container.

- scrollTo(x, y): Scrolls the content to the coordinates (x, y) within the container.
- scrollBy(x, y): Scrolls the content a specified amount from the current position.
- scrollIntoView(): Scrolls the element in question until it is visible in the viewport.

4. Focus Methods: Access methods that affect the focus of an element (such as an input).

- focus(): Sets the focus to the element.
- blur(): Removes the focus from the element.

5. Content methods:
Allows you to manipulate the internal content of an element.

- innerText: Gets or sets the visible text of an element.
- innerHTML: Gets or sets the HTML content of an element.
- textContent: Similar to innerText, but does not take into account the style and HTML elements.
- outerHTML: Gets or sets the complete HTML content of an element, including the element itself.

6. Class and attribute methods:
Allows you to manipulate the classes and attributes of an element.

- classList: Accesses the list of classes of the element. Allows methods such as add(), remove(), toggle().
- setAttribute(): Sets the value of an attribute on the element.
- getAttribute(): Gets the value of an attribute of the element.
- hasAttribute(): Checks if an attribute is present on the element.

7. Events: While it is generally recommended to use React's event system, useRef can also access native DOM events.

- addEventListener(): Adds an event listener to the element.
- removeEventListener(): Removes an event listener from the element.

8. Animation and transformation methods:
You can interact with DOM animations and transformations.

- animate(): Allows you to run a CSS animation through the element.
- requestAnimationFrame(): Requests the execution of a function in the next repaint cycle.

9. Child selection and manipulation methods:
Allows you to interact with the child elements of a container.

- children: Accesses the child elements of a node.
- firstChild: Gets the first child of the element.
- lastChild: Gets the last child of the element.
- childNodes: Gets a list of all the child nodes of the element.
- querySelector(): Selects the first element that matches a CSS selector within the container.
- querySelectorAll(): Selects all elements that match a CSS selector within the container.

10. Form methods (if applicable):
Allows you to access and manipulate forms and their elements.

- reset(): Resets the form to its initial state.
- submit(): Submits the form programmatically.
- elements: Accesses the elements within a form.

## Author

Rinel iñiguez sosa

## Requirements 

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor of your choice)
- [Node.js](https://nodejs.org/)
- npm (version 6 or higher) - This comes with Node.js, but make sure you have the latest version by running `npm install -g npm`.

## Install

Follow these steps to download and run the project locally

1. **Clone this repository:**

  Open your terminal and run the following command:

   ```bash
   git clone https://github.com/rineliniguezsosa/Portafolio.git
   ```

2.- **Navigate to the project directory:**

```bash
cd Portafolio
```

3.-**Open the project in Visual Studio Code:**

```bash
code .
```

4.-**Install the dependencies:**

```bash
npm install
````

## Deployment

Running the Development Server

To start the development server and see the application in action, run:

```bash
npm run dev
```