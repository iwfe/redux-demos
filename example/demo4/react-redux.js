/**
 * Created by slashhuang on 16/7/23.
 * react-redux使用

 */
				import thunk from 'redux-thunk';
				import { createStore,applyMiddleware } from 'redux';
				import React,{Component,PropTypes} from "react";
				import {Provider,connect} from "react-redux";
				import {render} from "react-dom";
				//创建redux的store
				var reducer=function(state,action){
					debugger;
				    return Object.assign({},state,action);
				};
				let store = applyMiddleware(thunk)(createStore)(reducer);
				//定义react需要传给redux的动作action,react-redux会包一层dispatch，这里只需要return=>action即可
				var action1=function(){
					return (dispatch)=>{
					 return $.ajax({
						url:'/webpack.config.js',
						success:()=>{
							dispatch({
				        'type':'dispatching',
				        'data':'我的click状态已传递至react'
				    		});
						}
					});};
				};
				var action2=()=>{
					return {type:'test'}
				}
				//创建react组件的实例
				@connect((state)=>state,{
					action1,
					action2
				})
				class Container extends Component{
				    render(){
				    	debugger;
				    	let {data} = this.props;
				    	if(data) alert(JSON.stringify(this.props.data));
				        return (<div onClick={()=>{
				        		this.props.action1.apply(this);
				        		// this.props.action1.apply(this)
				        	}}>测试react-react管理的事件</div>)         
				    }
				};
				//创建react和redux联系起来的容器
				class ModuleContainer extends Component{
				    render(){
				        return (<Provider store={store}>
				                    <Container/>
				                </Provider>)
				    }
				}
				render(<ModuleContainer/>,document.getElementById('root'));



