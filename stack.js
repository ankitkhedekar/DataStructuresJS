//https://medium.freecodecamp.com/data-structures-stacks-on-stacks-c25f2633c529#.16qnw3llm

class Stack {
  constructor(){
    this._storage = {};
    this._position = -1;
  }

  push(value){
    this._storage[++this._position] = value;
  }

  pop(){
    if(this._position > 1){
      let val = this._storage[this._position];
      delete this._storage[this._position--];
      return val;
    }
  }

  top(){
    return this._position;
  }
}


/*let browserHistory = new Stack();

browserHistory.push("google.com"); //navigating to Medium
browserHistory.push("medium.com"); // navigating to Free Code Camp
browserHistory.push("freecodecamp.com"); // navigating to Netflix
browserHistory.push("netflix.com"); // current site

console.log("top:", browserHistory.top());

console.log("popped:", browserHistory.pop()); //Returns netflix.com
console.log("top:", browserHistory.top());*/

//push (addition) : O(1)
//pop (removal) : O(1)
//top : O(1)
//find in stack : O(1)