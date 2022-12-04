


import {  combineReducers, createStore } from 'redux'
import { counterReduser } from './counterReduser';


const rootReducer = combineReducers({
   counter:counterReduser
})

let valueWithLocalstorege
const getValueWithLocalstorege = localStorage.getItem('keyState')
if(getValueWithLocalstorege) {
    valueWithLocalstorege= JSON.parse(getValueWithLocalstorege)
}
/*этим кодом делаем что при обновлении или старте приложения
начнет считать с значения которе последним попало в
локал сторадж*/

// непосредственно создаём store
export const store = createStore(rootReducer,valueWithLocalstorege);

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

/*именно здесь при изменении данных в сторе будет выполнятся колбэк
и именно на каждое выполнение колбэка я буду добавлять
значение в ЛОКАЛСТОРАДЖ*/
store.subscribe( () =>{
localStorage.setItem('keyState',JSON.stringify(store.getState()))
localStorage.setItem('keyState1',JSON.stringify(store.getState().counter.showValue))

})

/*
'state' это название  ключа в ЛОКАЛСТОРАДЖ
store.getState() даст стейт всего приложения и он будет
в ЛОКАЛСТОРАДЖЕ иметь вид {"counter":{"showValue":7}}*/

/*JSON.stringify(store.getState().counter.showValue)-этой строкой
делаю так что в ЛОКАЛСТОРАДЖЕ в значении уже не обект а
конкретно число*/
