class Queue {
    constructor() {
        this.items = [];
    }

    queue(item) {
        this.items.push(item);
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    peek() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    view() {
        return this.items.join(",");
    }
}

const queue = new Queue();
queue.queue(1);
queue.queue(2);
console.log(queue.peek())
console.log(queue.view());
queue.dequeue();
console.log(queue.size());