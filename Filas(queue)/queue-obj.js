class Queue {
    constructor() {
        this.items = {};
        this.key = 0;
        this.first = 0;
    }

    queue(item) {
        this.items[this.key] = item;
        this.key++;
    }

    dequeue() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        const item = this.items[this.first];
        delete this.items[this.first];
        this.first++;
        return item;
    }

    peek() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[this.first];
    }

    isEmpty() {
        return this.key - this.first === 0;
    }

    size() {
        return this.key - this.first;
    }

    view() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        const values = Object.values(this.items)
        return values.join(",");
    }
}


const queue = new Queue();
queue.queue(1);
queue.queue(2);
console.log(queue.peek())
console.log(queue.view());
queue.dequeue();
console.log(queue.size());