/*Refactored Code*/
function createStack() {
  const items = []; // moved items out of return parameter.
return {
  push(item) {
    items.push(item); // changed this.items to items, so that the method can access items array object in it's lexical scope
  },
  pop() {
    return items.pop();// changed this.items to items, so that the method can access items array object in it's lexical scope
  }
};
}
console.log('code execution started.')
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); //5
console.log(stack.items); //undefined.
