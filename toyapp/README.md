## Usage with React

Redux has no relation to React. We can write Redux apps with React, Angular, Ember, etc. Redux works especially well with libraries like React and Deku because they let you describe UI as a function of state, and Redux emits state updates in response to actions. 

## Install React Redux
```
npm install --save react-redux
```

## Presentational and Container Components 
 
 `Presentational components`: manages how things look
 
 `Contaion components`: manages how to do things
 
 [see detailed comparison here](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)
 
 ## Design Component Hierarchy
 
 [Design the shape of the root state object](https://redux.js.org/basics/reducers)
 
 [Think in React](https://reactjs.org/docs/thinking-in-react.html)
 
 For `TODO` App:
 #### Design for presentational components:
 * `TodoList`: a list of todos
    * `todos`: array of `todo` items
       * `todo`: {id, text, completed} 
       * `onTodoClick(id: number)`: a callback to invoke when a todo is clicked
 * `Todo`:
    * `text`: string, the text to show on the `todo`
    * `completed`: boolean, is whether the todo should appear crossed out
    * `onClick()`: callback, involked when the todo is clicked
 * `Link`:
    * `onClick()`: callabck, when a link is clicked
 * `Footer`: where user change currently visible todos
 * `App`: root component that renders everything else
 
 #### Design for container components:
 * 
 
 
