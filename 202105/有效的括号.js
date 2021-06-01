/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    let stack = []
    for(let i = 0; i<s.length ; i++){
        if(stack.length===0) {
            stack.push(s[i])
        }else {
            if(stack[stack.length-1]===map[s[i]]) {
                stack.pop()
            }else {
                stack.push(s[i])
            }
        }
    }
    if(stack.length >0) {
        return false
    }else {
        return true
    }
};

console.log(isValid("{}()"))