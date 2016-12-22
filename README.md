# Revue

[![NPM version](https://img.shields.io/npm/v/revue.svg?style=flat)](https://npmjs.com/package/revue) [![Build Status](https://img.shields.io/circleci/project/revue/revue/master.svg?style=flat)](https://circleci.com/gh/revue/revue) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> Learn [Redux](http://redux.js.org/) before using Revue. That would help you get rid of JavaScript fatigue, sort of.

## Usage

Obviously it works with Redux, install via NPM: `npm i --save redux revue`

You can also hot-link the CDN version: https://npmcdn.com/revue/dist/revue.js, `Revue` is exposed to `window` object.

## The Gist

You can try it online! http://esnextb.in/?gist=b300931ac26da8e9de2f

**store.js**

```js
import Vue from 'vue'
import Revue from 'revue'
import {createStore} from 'redux'
// create the logic how you would update the todos
import todos from './reducers/todos'
// create some redux actions
import actions from './actions'

// create a redux store
const reduxStore = createStore(todos)
// binding the store to Vue instance, actions are optional
const store = new Revue(Vue, reduxStore, actions)
// expose the store for your component to use
export default store
```

**actions/todos.js**

```js
// create actionCreators yourself or use `redux-actions`
export function addTodo(payload) {
  return {type: 'ADD_TODO', payload}
}
export function toggleTodo(payload) {
  return {type: 'TOGGLE_TODO', payload}
}
```

**component.js**
When creating a Vue component that needs to react to data from Redux's store, you must specify the bindings between the data of the component and the data in the store. The following is an example of binding the data `todo` in the component with `store.getState().todos` by using the special function `this.$select('todos')`.

```js
import store from './store'
import * as todoActions from './actions/todo'

export default {
  data() {
    return {
      todo: '',
      todos: this.$select('todos')
      //=> subscribe state.todos to vm.todos
      // if prop is not in top level
      // do this.$select('todos as path.to.todos')
    }
  },
  methods: {
    addTodo() {
      store.dispatch({type: 'ADD_TODO', this.todo})
      // or use the actionCreator
      store.dispatch(todoActions.addTodo(this.todo))
      // also equal to: (if you binded actions when creating the store)
      const {addTodo} = store.actions
      store.dispatch(addTodo(this.todo))
    }
  }
}
```

[**More detailed usages**](/example)

## [Recipes](https://github.com/revue/revue/issues?q=is%3Aissue+is%3Aclosed+label%3Arecipe) 🍳

- [Use webpack alias to resolve store.js](https://github.com/revue/revue/issues/8)
- [Using bindActionCreators](https://github.com/revue/revue/issues/7)

## Development

- **npm test** run unit test
- **npm run example** run webpack example

## License

MIT &copy; [EGOIST](https://github.com/egoist)
