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
 * `VisibleTodoList`: filters the todos according to the currrent visibility filter and renders\loads a `TodoList`.
 * `FilterLink`: gets the current visibility filter and renders a `Link`. 
    * `filter`: string, visibility filter

## Decomposition of Redux 
   
   [Reference](https://redux.js.org/basics)
   
 * ***Action***
 
   `Action` is a noun, an object, a data structure in Redux. This object/data structure specifies the information should be contained. 
   
 * ***Action Creator***
 
   `Action creator` is a function that returns an action object.
   
 * ***Reducer***
 
   `Reducer` is a function that takes in the current state of the application, and the action, and update the current state according to the type of the action passed in. Therefore, `reducer` returns an updated state.
   
 * ***Store***
 
   `Store` works like a connector that connects `action` and `reducer`. When we dispatch an `action` from `store`, `store` will pass the current state to the corresponding `reducer` and return an updated state, which UI will display it.
   
   One thing to take note is that, there is only one `store` is every redux application, and because `store` is created from reducer, thus we have to `combineReducer()` first before we create store for the application.
   
   The following are what a `store` will do:
   * Holds application state;

   * Allows access to state via `getState()`;

   * Allows state to be updated via `dispatch(action)`;

   * Registers listeners via `subscribe(listener)`;

   * Handles unregistering of listeners via the function returned by `subscribe(listener)`.
   
 * ***Data Flow***
 
   1. You call `store.dispatch(action)`.
   
   2. The Redux store calls the reducer function you gave it.
   
   3. The root reducer may combine the output of multiple reducers into a single state tree.
   
   4. The Redux store saves the complete state tree returned by the root reducer.
   
## Decomposition of React 
   * ***Components***
     * Presentational components
     
       The components that needs data to be displayed. 
       
     * Container components
       
       These are the functions, which cannot be displayed on UI. These functions process the current state which is read from Redux store and provides/extract necessary information to the corresponding presentational components.
       
       
## Connection between Redux and React 

Container components should `connect()` with the corresponding presentational components to supply information. To extract information from the current state, we use `mapStateToProps`; to modify the current information to be passed to the presentational components, we use `mapDispatchToProps`.

For exmaple:
```
const visibleTodoList = connect (
 mapStateToProps,
 mapDispatchToProps   
)(TodoList)

export default visibleTodoList
```


 
