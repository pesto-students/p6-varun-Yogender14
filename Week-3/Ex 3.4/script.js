// Ex 3.4

function createStack() {
    var items = [];
    function push(num) {
        items.push(num);
    }
    function pop() {
        return items.pop();
    }

    return {
        push,
        pop
    }

}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
