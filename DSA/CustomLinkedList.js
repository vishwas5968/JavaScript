class Node {
    constructor(data,next=null) {
        this.data=data
        this.next = next
    }
}

class CustomLinkedList {
    constructor() {
        this.head=null
        this.size=0
    }

    addLast(data){
        let node =new Node(data)
        if (!this.head){
            this.head=node
            return
        }
        let current=this.head
        while (current.next!=null){
            current=current.next
        }
        current.next=node
        this.size++
    }

    addFirst(data){
        this.head=new Node(data,this.head)
        this.size++
    }
    
    addAt(index,data){
        let node=new Node(data)
        let current=this.head.next
        let previous=this.head
        let count=0
        while (count!=index){
            current=current.next
            previous=previous.next
            count++
        }
        node.next=current
        previous.next = node
        this.size++
    }
    
    removeFirst(){
        this.head=this.head.next
        this.size--
    }
    
    removeLast(){
        if (!this.head){
            console.log("No values present in the List")
            return
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.size--
    }
    
    clear(){
        if (!this.head){
            console.log("No values present in the List")
        }
        this.head = null
        this.size=0
    }

    print(){
        if (!this.head){
            console.log("No values present in the List")
            return
        }
        let current=this.head
        while (current!=null){
            console.log(current.data)
            current=current.next
        }
    }
}

let list=new CustomLinkedList();
list.addLast(5)
list.addLast(8)
list.addLast(7)
list.addLast(1)
// list.print()
list.removeFirst()
// list.print()
list.removeLast()
// list.print()
list.addFirst(3)
list.print()