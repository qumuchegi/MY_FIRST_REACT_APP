import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';

import SaichengComponent from './SaichengComponent';
import SheshoubangComponent from './SheshoubangComponent';
import JifenbangComponent from './JifenbangComponent';

import '../CSS/Options_Saicheng_Sheshou_Jifen.css';

const Options_Saicheng_Sheshou_Jifen=({leagueInf,id})=>
{
var renderSaicheng=(data_saicheng,league_key,last)=>{
 	if(data_saicheng!=null){
	ReactDOM.render(<SaichengComponent saichengInf={data_saicheng} leaguekey={league_key} last={last}/>,document.getElementById('content'))
}else{
	alert('赛程为null')
}
};
var renderSheshou=(data_sheshou,league_key)=>{
 	if(data_sheshou!=null){
	ReactDOM.render(<SheshoubangComponent sheshouInf={data_sheshou} leaguekey={league_key}/>,document.getElementById('content'))
}else{
	alert('射手为null')
}
};
var renderJifen=(data_jifen,league_key)=>{
 	if(data_jifen!=null){
	ReactDOM.render(<JifenbangComponent jifenInf={data_jifen} leaguekey={league_key}/>,document.getElementById('content'))
}else{
	alert('积分榜为null')
}
};


return (
	<div class='Options_Saicheng_Sheshou_Jifen' id={id}>
	 <div id='saichengOption' onClick={
	    ()=>renderSaicheng((leagueInf.views.saicheng3==null)?
	    	                     (leagueInf.views.saicheng2==null?
	    		                     leagueInf.views.saicheng1:leagueInf.views.saicheng2):(leagueInf.views.saicheng3),
	    	                leagueInf.key,
	    	                (leagueInf.views.saicheng3==null)?
	    	                     (leagueInf.tabs.saicheng2==null?leagueInf.tabs.saicheng1:leagueInf.tabs.saicheng2):(leagueInf.tabs.saicheng3))}>
	 赛程榜</div>
	 <div id='sheshouOption' onClick={
	 	()=>renderSheshou(leagueInf.views.sheshoubang,leagueInf.key)
	 }>射手榜</div>
	 <div id='jifenOption' onClick={
	 	()=>renderJifen(leagueInf.views.jifenbang,leagueInf.key)
	 }>积分榜</div>
    </div>
    )

}

export default Options_Saicheng_Sheshou_Jifen;