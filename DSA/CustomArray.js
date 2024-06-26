class CustomArray {
    constructor() {
        this.length = 0;
        this.data = [];
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        if (index<0 || index>this.length)
            return "Invalid index"
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    shiftItems(index) {
        if (index<0 || index>this.length)
            return "Invalid index"
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }


    print() {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.data[i]);
        }
        console.log(result);
    }
}


const myArray = new CustomArray();
myArray.push(2);
myArray.push(1);
myArray.push(3);
// console.log(myArray.get(1))//1
// myArray.print();//[2,1,3]
// console.log(myArray.pop())//3
// myArray.print();//[2,1]
// myArray.delete(0);//[1]
// myArray.print()