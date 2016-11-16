//https://medium.freecodecamp.com/a-gentle-introduction-to-data-structures-how-linked-lists-work-5adc793897dd#.uhn4yco0p

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  add(value) {
    let node = new Node(value);
    if(this._head == null && this._tail == null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._length++;
  }

  contains(value) {
    let node = this._head;
    while(node) {
      if(node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  remove(value) {
    if(this.contains(value)){
      let current = this._head;
      let previous = current;
      while(current) {
        if(current.value === value){
          if(this._head === current) {
            this._head = this._head.next;
            this._length--;
            return;
          }
          if(this._tail === current){
            this._tail = previous;
          }
          previous.next = current.next;
          this._length--;
          return;
        }
        previous = current;
        current = current.next;
      }
    }
  }

  size() {
    return this._length;
  }
}


/*const AmazingRace = new LinkedList();

console.log('size:', AmazingRace.size());

AmazingRace.add("Colombo, Sri Lanka");
AmazingRace.add("Lagos, Nigeria");
AmazingRace.add("Surat, India");
AmazingRace.add("Suzhou, China");

console.log('size:', AmazingRace.size());


//Kent's check
console.log(AmazingRace.contains('Suzhou, China')); //true
console.log(AmazingRace.contains('Hanoi, Vietnam')); //false
AmazingRace.add('Hanoi, Vietnam');
console.log('size:', AmazingRace.size());
console.log(AmazingRace.contains('Seattle, Washington')); //false
AmazingRace.add('Seattle, Washington');
console.log('size:', AmazingRace.size());
console.log(AmazingRace.contains('North Pole')); // false
AmazingRace.add('North Pole');
console.log('size:', AmazingRace.size());


AmazingRace.remove('North Pole');
console.log('size:', AmazingRace.size());*/


//add : O(1)
//remove : O(n)
//contains : O(n)
