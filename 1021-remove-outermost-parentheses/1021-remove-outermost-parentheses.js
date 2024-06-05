function removeOuterParentheses(s) {
    let result = '';
    let balance = 0; 
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (balance === 0) {
                start = i; 
            }
            balance++;
        } else {
            balance--;
            if (balance === 0) {
                result += s.substring(start + 1, i); 
            }
        }
    }

    return result;
}

