/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer =[]
    for(let i=0;i< s.length;i++){
            let dis =Infinity
        for(let j=0;j<s.length;j++){
            if(s[j]===c){
                if(dis > Math.abs(i-j)){
                    dis =Math.abs(i-j)
                }
            }

        }
        answer.push(dis)
    }

    return answer
};