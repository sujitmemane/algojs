console.log("-------LINKED-LIST-------")

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

function setHeadIfEmpty(head, node) {
    if (head === null) {
        return node;
    }
    return head;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        const node = new Node(val)

        if (this.head === null) {
            this.head = node
            this.size++
            return this.head
        }

        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = node

        this.size++
        return this.head
    }

    addToHead(val) {
        // implement here
        const node = new Node(val)
        if(this.head===null){
            this.head=node
            this.size++
            return this.head
        }
        node.next= this.head
        return this.head



    }

    addToTail(val) {
        // implement here
        const node = new Node(val)
        if(this.head===null){
            this.head=node
            this.size++
            return this.head
        }
        let current = this.head
        while(current.next!==null){
            current = current.next
        }

        current.next=node
        return this.head


    }


    insert(index, value) {
        // if (index < 0 || index > this.size) {
        //     return false
        // }

        // const node = new Node(value)

        // if (index === 0) {
        //     node.next = this.head
        //     this.head = node
        //     this.size++
        //     return true
        // }

        // let current = this.head
        // let previous = null
        // let currentIndex = 0

        // while (current !== null && currentIndex < index) {
        //     previous = current
        //     current = current.next
        //     currentIndex++
        // }

        // previous.next = node
        // node.next = current
        // this.size++
        // return true

        if(index<0 || index>this.size){
            return false
        }

        if(index=0){
          node.next=this.head
          this.head = node
          this.size++
          return true
        }


        let current = this.head
        let previous = null
        let currentIndex=0
        while(current !== null && currentIndex<index){
            previous = current
            current = current.next
            currentIndex++
        }

        previous.next=node
        node.next=current
        this.size++
        return true
    }

    removeAt(index) {
        // implement here   
        if(index<0 || index>this.size){
            return false
        }
        if(index=0){
          this.head = this.head.next
          this.size--
          return true
        }


        let current = this.head
        let previous = null
        let currentIndex=0
        while(current !== null && currentIndex<index){
            previous = current
            current = current.next
            currentIndex++
        }


        previous.next=current.next
        this.size--
        return true


    }

    removeByValue(value) {
        let current = this.head
        let previous = null

        while (current !== null) {
            if (current.value === value) {
                if (previous === null) {
                    this.head = current.next
                } else {
                    previous.next = current.next
                }
                this.size--
                return true
            }

            previous = current
            current = current.next
        }

        return false
    }

    getAt(index) {
        // implement here
        let currentIndex = 0
        let current = this.head
        while(current!==null){
            if(currentIndex===index){
                return current.value
            }
            current = current.next
            currentIndex++
        }
    }

  



    printList() {
        // implement here
        let current = this.head
        while(current!==null){
            print(current.value)
            current = current.next
        }
    }

    reverse() {
        // let previous = null
        // let current = this.head

        // while (current !== null) {
        //     const nextNode = current.next
        //     current.next = previous
        //     previous = current
        //     current = nextNode
        // }

        // this.head = previous
        // return this.head


        let previous = null
        let current = this.head
        while(current!==null){
            const nextNode = current.next
            current.next = previous
            previous = current
            current = nextNode
        }
        this.node = previous
        return this.head
    }

    findMiddle() {
        if (this.head === null) {
            return null
        }

        let slow = this.head
        let fast = this.head

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        return slow.value
    }


  
}


const firstLinkedList = new LinkedList()
firstLinkedList.add(4)
firstLinkedList.add(10)
firstLinkedList.print(10)