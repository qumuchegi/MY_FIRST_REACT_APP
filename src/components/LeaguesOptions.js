import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import LeaguesObjForCSS from './LeaguesObjForCSS';
import '../CSS/LeaguesOptions.css';
import Options_Saicheng_Sheshou_Jifen from './Options_Saicheng_Sheshou_Jifen';

let i=0;

//点击触发查询联赛API,从stata传入对于的联赛name
var ClickToQueryAPI=(leagueName,leagueType)=>{

    var url='http://localhost:3001/';//API请求根URL,应该请求代理服务器
    url+='league?dtype=&league='+encodeURI(leagueName)+'&key=b117a5992d33a7f05413a7a4349d7b78';

//callback()得到对于联赛信息
    var callback=(data)=>{
     var leagueInf=data;
     var src='';
     switch(leagueInf.result.key){
     	case '英超':{src='./yingchao.jpeg';break}
     	case '西甲':{src='./xijia.jpg';break}
     	case '德甲':{src='./dejia.jpeg';break}
     	case '意甲':{src='./yijia.jpeg';break}
     	case '法甲':{src='./fajia.jpeg';break}
     }
     
     ReactDOM.render(<img src={src} width='100%'/>,document.getElementById('content'));
     ReactDOM.render(<Options_Saicheng_Sheshou_Jifen leagueInf={leagueInf.result} id={leagueType}/>,document.getElementById('rightcontent_top'));
     
    }

	var request = new XMLHttpRequest(); 
	request.open('GET',url,true);
    request.onreadystatechange = function () {
      if (request.readyState==4&&request.status==200) {  
      callback(JSON.parse(request.responseText));
     }  
    };
   	request.send();
 
 }



const LeaguesOptions=()=>LeaguesObjForCSS.map(
	(Item)=><div className='LeaguesOptions'  key={i++} onClick={
        ()=>ClickToQueryAPI(Item.name,Item.type)}>
	           <img src={Item.iconURL} style={{width:'30%'}}/>
	           <span>{Item.name}</span>
            </div>
	);
	
export default LeaguesOptions;
