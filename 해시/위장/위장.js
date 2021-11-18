/**
 * 
 */

function solution(clothes) {
    var answer = 0;
    var map = new Map();
    
    //같은 종류의 의상은 누적 + 1 처리
    clothes.forEach((element) => {
       var type = element[1];
       console.log(type);
       map.set(type, map.get(type)==null? 1 : map.get(type)+1); 
    });
    //현재 맵의 상태 : [{headgear : 2}....]
    //전체 옷을 1개 이상 선택하는 경우의 수는 ((n1 + 1) * (n2 + 1) * (n3 + 1)...* (nn + 1)) - 1
    
    
    //Array.from : literable -> 실제 배열변환 // map.values() -> value literable 변환
    //reduce : 요소에 하나씩 접근 (CurrentVal + 1) 누적 곱하기 최종 -1을 해주면 모든 경우의 수 출력
    answer = Array.from(map.values()).reduce(function multiple(multi, currentVal){
            return multi * (currentVal + 1);
    }, 1) - 1;

    return answer;
}