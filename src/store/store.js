import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default use for local storage

//Creating a logger
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
const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middlewares are little library helpers that run before an action hits the reducer, so whe you dispatch an action before that action hits the reducers it hits the middlewares first
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
