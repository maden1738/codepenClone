# CODE-PEN CLONE

#### Video Demo: https://youtu.be/JtrHr58yDtk

#### Run locally

Use the following code to install the required packages and host locally
`npm install`
`npm run dev`

#### Deployed Link

This project is being hosted at https://codepen-clone-indol-seven.vercel.app/

#### Description:

This project is a clone of [Codepen](https://codepen.io/pen/). It enables users to write html, css and js directly from browser and see the respective changes in real time. This makes it very convenient as it requires no setups. Users can code directly from the browser. This project is made in [React](https://react.dev), a very popular Javascript library. As for the CSS, I have used [Tailwind](https://tailwindcss.com). Tailwind streamlines the process of writing CSS.

Basically, this project can be divided into two parts: the code editor where we write the code input and the output screen. For the code editor I have used [react-ace](https://www.npmjs.com/package/react-ace) and the output part is simply through the **srcDoc** props of iframe. To ensure changes in code editor are updated in output screen in real time, I have created a state named **code**. The code is an object that contains three properties: html, css and js. So, the html, css and js code we write will have their own state value. Now, everytime this state changes, an effect is run which updates another state named **srcDoc**. When **srcDoc** gets updated, the output we see through iframe is updated as well. In this way, the code-editor is related with the iframe.

#### Editor.jsx

I have created a component named **Editor**, which is reused three times to represent the code editor for html, css and js. We achieve this reusability through the props we have passed through App.jsx. Here, we have **<AceEditor />** which we have imported from the package [react-ace](https://www.npmjs.com/package/react-ace). While researching for code editor to use , I came across the following [article](https://blog.logrocket.com/best-code-editor-components-react/). This article mentioned react-ace along with other different options. In the end, I chose react-ace for its simplicity and I don’t regret this decision.

React-ace provides many customization features like themes, font-size, line-numbers, auto complete suggestions etc. It should be noted that we have to import the respective ”mode” for the language we are using and “theme ” the code-editor should have. Just like how we control input fields with states in react-forms. In react-ace, the AceEditor is linked with state (html or css or js). It supports many event handlers like onChange, onScroll etc. In this project, we are concerned with onChange event, as we update the respective state every time there is some change in the code-editor. The code editor has the same state as its value. In this way, we achieve controlled inputs.

`onChange={(value) => {
          handleChange((prev) => ({ ...prev, [name]: value }));
}}`

In this code, I have used spread operators to update only the respective state value. For example, if we have written some new code in html code editor, we only want to change the state of “html” and css and js state must remain the same.

#### Debouncing updates

Note that in App.jsx, I have used setTimeout of 500ms while updating **srcDoc**. This was done so that **srcDoc** doesn’t get updated on every single keystroke, as that can hurt performance and decrease the number of writes to a database, if it is linked to a database. So, in this project, changes are seen in the output only after 500ms. So, we can write multiple letters or words and output will be updated once after 500ms. We also need to use the clearTimeout so that old timeout is cleared and only one update is required.

#### LocalStorage

To ensure some form of backup, I have used local storage. Every time **code** changes its state and the useEffect is run, **code** gets saved in localStorage(again with the delay of 500ms). It is important to know that we cannot save objects directly into the database. So, it should be converted into strings first which can be done through JSON.stringify(). Similarly, we want our code state to be initialized with the value from localStorage. And the string value from local storage is first converted into object through JSON.parse().
