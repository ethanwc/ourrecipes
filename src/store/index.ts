// src/store/index.ts
//https://redux.js.org/recipes/usage-with-typescript

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'

// export interface RootState {
//   ShoppingList: ShoppinglistState
// }

// const rootReducer = combineReducers({
//   system: systemReducer,
//   chat: chatReducer
// })

// export type RootState = ReturnType<typeof rootReducer>