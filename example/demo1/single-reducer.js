/**
 * Created by huangxiaogang on 16/7/26.
 * pure store 单个reducer
 */

import {createStore} from 'redux';
//创建reducer
let reducer = (state,action)=>{
	debugger;
    switch (action.type){
        case 'hello':
            return Object.assign({},state,action)
        default :
            return state;
    }
};
//创建store
let store = createStore(reducer);
debugger;
//创建action
let action = {
	type:'hello',
	data:'word'
};
//调度action
store.dispatch(action);
//打印当前状态
console.dir(store.getState());
