/**
 * 
 */

function solution(numbers) {
    let set = new Set();
    
    for(let i = 0; i < numbers.length; i++){
        //number의 length까지 1씩 증가시켜 (length P i+1)의 모든 경우의수를 구하고
        //각 요소마다 소수인지 판단
        arrPr(numbers, i+1).forEach((element) => {
           if(isTrue(parseInt(element))) set.add(parseInt(element));
        });
    }
    //중복된 소수가 없이 출력
    return set.size;
}

//순열 모든 경우의수 구하기
function arrPr(strArr, r){
	let res = [];
	let tmp = [];
		
	let ch = Array.from(Array(strArr.length + 1), () => 0);
		
	function DFS(L){
		if(L === strArr.length){
			res.push(tmp.join(''));
		}else{
			for(let i = 0; i < strArr.length; i++){
				if(ch[i] === 0){
					tmp[L] = strArr.charAt(i);
					ch[i] = 1;
					DFS(L + 1);
					ch[i] = 0; // 초기화 해주어야 모든 경우 출력
				}
			}
		}
	}
	DFS(strArr.length - r); // ex) 배열의 길이 5중에 2개선택이면 DFS(3) 시작
	return res;
}

//소수 구하기
function isTrue(number){
    if(number === 0 || number === 1) return false;
    
    //2부터 number의 루트값 이하로 나눈 값들이 0이 아니면 소수
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}