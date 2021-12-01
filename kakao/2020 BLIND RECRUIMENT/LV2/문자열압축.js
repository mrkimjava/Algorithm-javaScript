function solution(s) {
    let minlength = 1004;
    
    for(let i = 0; i <= s.length/2; i++){
        let temp = cal(s, i+1);
        if(minlength > temp) minlength = temp;
    }
    return minlength;
}

function cal(s, unit){ 
    let n = 1;
    let i = 0;
    let news = '';
    
    while((i+(2*unit)) <= s.length){
        var substr = s.substring(i, i + unit);
        var substr2 = s.substring(i + unit, i + (2*unit));
            
        if(substr == substr2){                
            if(i+(2*unit) == s.length) {
                news += (++n + substr);
                return news.length;  
            }
            n++;
            i += unit;
            
            if((i+(2*unit)) > s.length){
                news += (n + substr);
                i += unit;
            }
        }else if(n != 1){
            news += (n + substr);
            i += unit;
            n = 1;
        }else{
            news += substr
            i += unit;
            n = 1;
        }
    }
        
    news += s.substring(i, s.length);   
    
    return news.length;        
}

console.log(solution("aabbaccc"));
