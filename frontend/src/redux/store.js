import { configureStore,combineReducers} from '@reduxjs/toolkit'
import { useReducer } from './user/userSlice'
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };



export const store = configureStore({
  reducer: {user:useReducer},
  middleware:(getDefaultMiddlewarea) => getDefaultMiddlewarea({
    serializableCheck:false,
  })
})


export const persistor = persistStore(store);
