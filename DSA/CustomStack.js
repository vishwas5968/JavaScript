class Node {
    constructor(data,next=null) {
        this.data = data
        this.next = next
    }
}

class CustomStack {
    constructor() {
        this.head=null
        this.size=0
    }

    push(data){
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

    pop(){
        if (!this.head){
            console.log("No values present in the List")
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
    }

    peek(){
        if (!this.head){
            console.log("No values present in the List")
            return
        }
        if (!this.head.next) {
            console.log(this.head.data)
            return
        }
        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        console.log(current.data)
    }

    search(element){
        if (!this.head){
            console.log("No values present in the List")
            return false
        }
        if (!this.head.next && this.head.data===element) {
            return true;
        }
        let current = this.head;
        let prev = null;
        while (current.next) {
            if (current.data===element){
                return true
            }
            prev = current;
            current = current.next;
        }
        return false
    }

    clear(){
        if (!this.head){
            console.log("No values present in the List")
        }
        this.head=null
    }

    print(){
        if (!this.head){
            console.log("No values present in the List")
        }
        let current=this.head
        while (current!=null){
            console.log(current.data)
            current=current.next
        }
    }
}

let stack=new CustomStack()
stack.push(5)
stack.push(1)
stack.push(7)
stack.push(3)
stack.print()
stack.pop()
stack.print()
stack.peek()
console.log(stack.search(5))
console.log(stack.search(0))
stack.clear()
stack.print()