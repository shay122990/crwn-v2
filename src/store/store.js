import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next)=> (action)=>{
//   if(!action.type){
//     return next(action)
//   }
//   console.log('type',action.type)
//   console.log('payload:', action.payload)
//   console.log('currentState', store.getState())

//   next(action)

//   console.log('next state:', store.getState())
// }

//middlewares are little library helpers that run before an action hits the reducer, so whe you dispatch an action before that action hits the reducers it hits the middlewares first
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
