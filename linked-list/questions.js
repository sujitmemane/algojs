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
            if (hash.has(current.value)) return true
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

}

// Demo
const list = new LinkedList();

list.append(3);
list.append(2);
list.append(0);
list.append(-4);
console.log(list.isCycleInLinkedListApproachOne())

list.print();