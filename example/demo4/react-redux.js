/**
 * Created by slashhuang on 16/7/23.
 * react-redux使用
 */
				import { createStore } from 'redux';
				import React,{Component,PropTypes} from "react";
				import {Provider,connect} from "react-redux";
				import {render} from "react-dom";
				//创建redux的store
				var reducer=function(state,action){
				    return Object.assign({},state,action);
				};
				let store = createStore(reducer);
				//定义react需要传给redux的动作action,react-redux会包一层dispatch，这里只需要return=>action即可
				var action=function(){
					return 	{
				        'type':'dispatching',
				        'data':'我的click状态已传递至react'
				    }
				};
				//创建react组件的实例
				@connect((state)=>state,{action})
				class Container extends Component{
				    render(){
				    	let {data} = this.props;
				    	if(data) alert(JSON.stringify(this.props.data));
				        return (<div onClick={this.props.action.bind(this)}>测试react-react管理的事件</div>)         
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



