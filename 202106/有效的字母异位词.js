/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//sort
 var isAnagram = function(s, t) {
     if(s.length!==t.length) {
        return false
     }
    let a1 = s.sort()
    let a2 = t.sort()
   return a1 === a2
};

var isAnagram1 = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
   const arr = new Array(26).fill(0)
    for(let i = 0; i<s.length; ++i) {
        arr[s.codePointAt(i) - 'a'.codePointAt(0)]++ 
    }
    console.log(arr)
    for(let i = 0; i<t.length; ++i) {
        arr[t.codePointAt(i) - 'a'.codePointAt(0)]--
        if(arr[t.codePointAt(i) - 'a'.codePointAt(0)]<0) {
            return false
        }
    }
    console.log(arr)
    return true
};

console.log(isAnagram1("rat","car"))