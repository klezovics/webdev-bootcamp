# Notes
## Summary
- Redux allows you to store global state in a single place
- Global state = state that is accessable by all components -> easy to exchange data between components.
- You can think of redux as the front-ends database
- The object which holds the global state is called the store
- The store is created by passing a reducer to the createStore function

## Key terms
- Redux store: global state
- Reducer: function that returns a piece of state
- Action: object that tells the reducer what piece of state to return
- Dispatch: function that sends an action to the reducer
- Provider: component that wraps the entire app and provides the store to all components
- Connect: function that connects a component to the store
- mapStateToProps: function that maps a piece of state to a prop
- mapDispatchToProps: function that maps a dispatch to a prop
- Action creator: function that returns an action
- Middleware: function that runs between dispatching an action and the action reaching the reducer
- Thunk: middleware that allows you to return a function from an action creator

## Questions
## ToDo

# Resources
- 100 seconds redux intro https://youtu.be/_shA5Xwe8_4

