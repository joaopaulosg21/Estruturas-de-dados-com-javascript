class Stack {
    constructor() {
        this.items = {};
        this.key = 0;
    }

    push(element) {
        this.items[this.key] = element;
        this.key++;
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack is empty"; 
        }
        this.key--;
        const element = this.items[this.key];
        delete this.items[this.key];
        return element;
    }

    isEmpty() {
        return this.key === 0;
    }

    peek() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.key - 1];
    }

    size() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }

        return this.key;
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());