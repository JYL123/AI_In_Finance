## First

Redux has no relation to React. We can write Redux apps with React, Angular, Ember, etc. Redux works especially well with libraries like React and Deku because they let you describe UI as a function of state, and Redux emits state updates in response to actions. 

## Install React Redux
```
npm install --save react-redux
```

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

[see detailed comparison here](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)

   * ***Components***
    
     * Presentational components
     
       The components that needs data to be displayed. 
       
     * Container components
       
       These are the functions, which cannot be displayed on UI. These functions process the current state which is read from Redux store and provides/extract necessary information to the corresponding presentational components.
       
       
## Connection between Redux and React 

Presentational components should `connect()` with the application store to supply/retrieve information. Essentially, `connect()` connects the presentational components with `mapStateToProps` and `mapDispatchToProps`, so that all the changes sepcified in `mapStateToProps` and `mapDispatchToProps` are triggered by this component.

To extract information from the current state for the components to display, we use `mapStateToProps`. `mapStateToProps` receives application state from the store whenever state has changed and make data

To update the state with input data that corresponding components take (normally due to a button click, etc), we use `mapDispatchToProps`. `mapDispatchToProps` receives dispatch functions from the store and dispatch an action creator (a function that returns an action) to change the current application state.

For exmaple:
```
const visibleTodoList = connect (
 mapStateToProps,
 mapDispatchToProps   
)(TodoList)

export default visibleTodoList
```

## Application Design with React-Redux 
 
 `Presentational components`: manages how things look
 
 `Contaion components`: manages how to do things
 

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

#### Design for other components:

Sometimes it's hard to tell if some component should be a presentational component or a container. For example, sometimes form and function are really coupled together, such as in the case of this tiny component:

   * AddTodo is an input field with an “Add” button

 
