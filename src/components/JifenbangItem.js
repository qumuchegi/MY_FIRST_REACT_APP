import React from 'react';
import ReactDOM from 'react-dom';
import '../CSS/JifenbangItem.css';
import ClubQueryComponent from './ClubQueryComponent';


var queryClub=(clubname)=>{
	var url='http://localhost:3001/';//API请求根URL,应该请求代理服务器
 	url+='team?dtype=&team='+encodeURI(clubname)+'&key=b117a5992d33a7f05413a7a4349d7b78';
	 	//向代理服务器发送查询类型(联赛还是球队)和查询对象(联赛名还是球队名)的字符窜，由服务器得到字符窜后根据字符窜构造url请求API，
	 	//服务器得到API回传过来
	 	//url+='team?dtype=&team='+encodeURI(state.querystring)+'&key=b117a5992d33a7f05413a7a4349d7b78'; 	
    function callback2(data){
     	var ClubsInf=data.result.list;
     	ReactDOM.render(<div>{data.result.key}赛程>>></div>,document.getElementById('rightcontent_top'));
    	ReactDOM.render(<ClubQueryComponent ClubsInf={ClubsInf}/>,document.getElementById('content'))
        return true;
  }

  
	var request = new XMLHttpRequest(); 
	request.open('GET',url,true);
    request.onreadystatechange = function () { 
        if (request.readyState==4&&request.status==200) {  
        callback2(JSON.parse(request.responseText));
     }  
    };
   	request.send();
}
const JifenbangItem=({paiming,clubname,jifen})=>
<tr>
 <td id='Jifen_paiming'>{paiming}</td>
 <td id='Jifen_clubname' onClick={()=>queryClub(clubname)}>{clubname}</td>
 <td id='Jifen_jifen'>{jifen}</td>
</tr>

export default JifenbangItem;