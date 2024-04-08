class CustomQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }
}

let queue=new CustomQueue()
queue.enqueue(1)
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(2)
// queue.print()
// console.log(queue.front())
queue.dequeue()
queue.print()
console.log(queue.size())


export default CustomQueue