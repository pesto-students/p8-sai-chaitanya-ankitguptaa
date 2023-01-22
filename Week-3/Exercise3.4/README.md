## Exercise 3.4
Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

![image](https://user-images.githubusercontent.com/9669308/213875224-8030f8b6-41e9-4161-b5ef-9db8935fab7f.png)

![image](https://user-images.githubusercontent.com/9669308/213875238-6a4655cc-867a-4526-b20d-403010b14968.png)

*Guidelines*:

1. The candidate should be able to refactor the code and get the desired output.
2. The candidate should be able to explain the code why it was not working before.
5. The candidate should be able to explain the code why it is working now.

*Outcome*:

1. The candidates will understand how ‘closure’ works in JS.
2. The candidates will understand how ‘encapsulation’ works in JS.

**Code output sample with explanation**:   

```js
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
```
![image](https://user-images.githubusercontent.com/9669308/213896803-7d7148d1-dfe7-4b4c-a92e-5ad25e92bc05.png)
