/**
 * 
 */

function solution(participant, completion) {
    
    var map = new Map();
    
    //map 참가자 누적 value =- 1
    for(let i in participant){
        var temp = participant[i];
        map.set(temp, map.get(temp)==null? -1 : map.get(temp)-1);
    }
    
    //완주자 업데이트 value =+ 1
    for(let i in completion){
        var temp = completion[i];
        map.set(temp, map.get(temp)+1);
    }
    
    //동명이인이더라도 모두 완주했다면 value는 0
    for(let [key, value] of map){
        if(value < 0){
            return key;
        }
    }
}