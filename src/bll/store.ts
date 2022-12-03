


import {  combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { counterReduser } from './counterReduser';


const rootReducer = combineReducers({
   counter:counterReduser
})
// непосредственно создаём store
export const store = createStore(rootReducer);

// определить автоматически тип всего объекта состояния
/*это типизация СТЭЙТА всего приложения*/
export type AppStateType = ReturnType<typeof rootReducer>
/*оператор ReturnType смотрит что возвращает
функция rootReducer--то и типизирует
автоматически*/
 type AppStoreType=typeof store
/*это типизация СТОРА и ниже пример как
получить доступ к СТОРУ*/

/*let a:AppStoreType
a.dispatch
a.subscribe()
a.getState()*/

// @ts-ignore
window.store = store;

