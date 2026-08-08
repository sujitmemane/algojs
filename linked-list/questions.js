console.log("---------LINKEDLIST-QUESTIONS------------");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const node = new ListNode(val);

        if (!this.head) {
            this.head = node;
            return node;
        }

        let cur = this.head;

        while (cur.next) {
            cur = cur.next;
        }

        cur.next = node;

        return node;
    }

    print() {
        let cur = this.head;
        const out = [];

        while (cur) {
            out.push(cur.val);
            cur = cur.next;
        }

        console.log(out.join(" -> "));
    }
    /*



    */
    isCycleInLinkedListApproachOne() {
        const hash = new Set()
        let current = this.head
        while (current !== null) {
            if (hash.has(current.val)) return true
            hash.add(current)
            current = current.next
        }
        return false
    }


    isCycleInLinkedListFloydAlgo() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            if (slow === fast) return true
            slow = slow.next
            fast = fast.next.next
        }
        return false
    }

   /*
   SPACE COMPLEXITY - O(n)
   TIME COMPLEXITY - O(n)
   */
   isPalindrome(){
    const arr=[]
    let current = this.head
    while(current!==null){
        arr.push(current.val)
        current = current.next
    }
   
    let left = 0
    let right = arr.length-1
    while(left<=right){
        if(arr[left]!==arr[right]) return false
        left++
        right--
    }
    return true

   }
//  [1,2,3,4,5]
   
    // Reverse a linked list starting at `head` and return new head
 

   /*
  so in the above question we can see that the we got the time complexity as O(n) but also got the same space
  complexity so reduce this we can do one thing we can reverse the half of linked list and check 
  so lets discuss how we can do that
  1. find the middle node of linked list using slow and fast pointer in case of odd number of size of linked
  list [1,2,3,4,5] - so the left pointer will be at exact middle one
  in case of event [1,2,3,4] - in case of even it will be at last of first half 
   */
 // [1,2,3,4]



reverse(head) {
        let previous = null;
        let current = head;
        while (current) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }


  isPalindromeOptimized(){
    if(!this.head || !this.head.next) return true
    let slow = this.head
    let fast = this.head
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
    }
    if(!fast){
        slow=slow.next
    }
    let reversedHead = this.reverse(slow)
    let currFHead = this.head
    let currSHead = reversedHead


  while (currSHead !== null) {
    if (currFHead.val !== currSHead.val) {
        return false;
    }

    currFHead = currFHead.next;
    currSHead = currSHead.next;
}

return true;
    return true

  }
}
// Demo
const list = new LinkedList();

list.append(2);
list.append(3);
list.append(3);
list.append(2);
// console.log(list.isCycleInLinkedListApproachOne())
console.log(list.isPalindromeOptimized())

list.print();