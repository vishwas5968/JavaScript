class MapNode{
    constructor(key, value){
        this.key=key;
        this.value=value;
        this.next = null;
    }
}

class CustomMap{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    set(key, value){
        let n = new MapNode(key, value);
        if(this.head===null){
            this.head = n;
            this.size++;
            return;
        }
        let current = this.head;
        while(current.next!==null){
            if(current.key===key){
                current.value=value;
                return;
            }
            current = current.next;
        }
        current.next=n;
        this.size++;
    }

    get(key){
        if(this.head===null) return new Error('Empty Table');
        let current = this.head;
        while(current!==null){
            if(current.key===key) return current.value;
            current = current.next;
        }
        return undefined;
    }

    has(key){
        if(this.head===null) return new Error('Empty Table');
        let current = this.head;
        while(current!==null){
            if(current.key===key) return true;
            current = current.next;
        }
        return false;
    }

    delete(key){
        if(this.head===null) return new Error('Empty Table');
        let current = this.head;
        while(current!==null){
            if(current.next.key===key) break;
            current = current.next;
        }
        if(current===null) return false;
        if(current.next.next!==null) {
            current.next = current.next.next
        }
        else {
            current.next = null
        }
        return true;
    }

    clear(){
        this.head=null;
    }

    entries(){
        let str = `{\n`;
        let current = this.head;
        while(current!=null){
            str = `${str} { ${current.key}, ${current.value} }`;
            if(current.next!==null)
                str+=`,\n`;
            current=current.next;
        }
        str+=`\n}`
        console.log(str);
    }

    keys(){
        let str = `{`;
        let current = this.head;
        while(current!=null){
            str = `${str}${current.key}`;
            if(current.next!==null) str+=`, `;
            current=current.next;
        }
        str+=`}`
        console.log(str);
    }

    values(){
        let str = `{`;
        let current = this.head;
        while(current!=null){
            str = `${str}${current.value}`;
            if(current.next!==null) str+=`, `;
            current=current.next;
        }
        str+=`}`
        console.log(str);
    }
}
let map = new CustomMap();
map.set(1,'A');
map.set(2,'B');
map.set(3,'C');
map.set(4,'D');
map.set(5,'E');
map.set(3,'F');

map.entries();
console.log(map.size);
console.log(map.get(4));
console.log(map.delete(3));
map.entries();
map.clear();
map.keys();
map.values();