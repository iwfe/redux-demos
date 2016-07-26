/**
 * Created by huangxiaogang on 16/7/26.
 * pure store 多个reducer
 */

import {createStore,combineReducers} from 'redux';
//创建reducer
let reducer1 = (state={},action)=>{
    switch (action.type){
        case 'hello':
            return Object.assign({},state,action)
        default :
            return state;
    }
};
let reducer2 = (state={},action)=>{
    switch (action.type){
        case 'test':
            return Object.assign({},state,action)
        default :
            return state;
    }
};
let finalReducers = combineReducers({
	reducer1,
	reducer2
});
//创建store
let store = createStore(finalReducers,{});
//创建action
let action1 = {
	type:'hello',
	data:'hello'
};
let action2= {
	type:'test',
	data:'test'
};
//调度action
store.dispatch(action1);
//打印当前状态
console.dir(store.getState());
store.dispatch(action2);
//打印当前状态
console.dir(store.getState());
