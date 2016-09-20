import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import rootReducer from '../modules/reducers'


export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware )// , createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/reducers', () => {
      const nextRootReducer = require('../modules/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
