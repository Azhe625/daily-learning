
/**
 * 1=>2=>3=>null  变为3=>2=>1=>null
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let cur = head
    let prev = null

    //从1遍历到3
    while(cur!==null) {
        const next = cur.next //先缓存当前节点next的值
        cur.next =  prev //改变当前节点的next为上一次的遍历节点
        prev = cur //遍历到第二次之后 需要用到(指向)前一个节点
        cur = next //遍历下一个
    }
    return prev
};