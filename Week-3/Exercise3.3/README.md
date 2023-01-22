## Exercise 3.3:

1. What is the output of the below problem and why:[30min]

<img width="260" alt="2" src="https://user-images.githubusercontent.com/9669308/213871260-201b09d3-0dd7-4fcd-a766-786eda598e4f.PNG">

*Guidelines*:

1. The candidate should be able to explain the code with the desired output.

*Outcome*:

1. The candidates will understand how ‘closure’ works in JS.
 
2. The candidates will understand how ‘encapsulation’ works in JS.

**Code output sample with explanation**:
![image](https://user-images.githubusercontent.com/9669308/213878805-965d007a-72b9-4ae8-a38e-21b8e6f45915.png)
```js

function createIncrement() { // Outer function: createIncrement
 let count = 0; 
 function increment() { // Inner Function: increment
    count++;
  }
  let message = 'Count is ' + count;
  function log() { // Inner Function: increment
    console.info(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

```
<html>
<body>
<!--StartFragment--><google-sheets-html-origin><!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->

Actions | count | message | Reason
-- | -- | -- | --
When createIncrement() method is called for the first time. | 0 | Count is 0 | with the first time initialization of the class, count value is set as 0
First time when the increment() method is called | 1 | Count is 0 | with increment method call, message remains untouched.
Second time when the increment() method is called | 2 | Count is 0 | with increment method call, message remains untouched.
Third time when the increment() method is called | 3 | Count is 0 | with increment method call, message remains untouched.
Finally when log() method is called. | 3 | Count is 0 | when log() method is called, due to the closure behaviour, methods log() method will capture value of message from its outer lexical scope, that is createIncrement outer function scope, which has value for message as "Count is 0", which got stored with the first time initialization of createIncrement Class

<!--EndFragment-->
</body>
</html>
