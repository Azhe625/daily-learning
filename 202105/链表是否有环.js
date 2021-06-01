/**
 * 
 * 四种解法
 * 1.哈希、数组遍历法
 * 2.快慢指针
 * 3.标记法，已经遍历过的加个标记
 * 4.利用json.stringify检测，成功执行则不是环
 */
 let Node = function(data) {
    this.data = data // 数据
    this.next = null // 指针
}
// 创建新的节点
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3
node3.next = node1
/**
 * 遍历解法 哈希
 */
 var hasCycle = function(head) {
    let map = new Map()
    while(head!==null) {
        if(map.has(head)) {
            return true
        }
        map.set(head,true)
        head = head.next
    }
    return false
};

/**
 * 快慢指针
 */
var hasCycle2 = function(head) {
    if(head === null || head.next === null) {
        return false
    }
    let slow = head
    let fast = head
    while(slow!=fast) {
        if(fast === null || fast.next==null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
}