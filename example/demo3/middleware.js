/**
 * Created by huangxiaogang on 16/7/26.
 * 添加中间件
 */
 
//引入redux的api
import {createStore,applyMiddleware} from 'redux';
//创建reducer
let reducer = (state,action)=>{
    switch (action.type){
        case 'hello':
            return Object.assign(state,action)
        default :
            return state;
    }
};
//创建中间件
let _console =store=>next=>action=>{
    console.group(action);
    next(action);
};
//创建带有中间件的store

let _store = applyMiddleware(_console)(createStore)(reducer,{});
//创建action
let action = {
    type:'hello',
    data:'word'
};
//调度action
_store.dispatch(action);
//打印当前状态
console.dir(_store.getState());
