//https://medium.freecodecamp.com/a-gentle-introduction-to-data-structures-how-queues-work-f8b871938e64#.o5gajgjx0

class Queue{
  constructor(){
    this._storage = {};
    this._start = -1;
    this._end = -1;
  }

  enqueue(val){
    this._storage[++this._end] = val;
  }

  dequeue(){
    if(this.size()){
      let nextUp = this._storage[++this._start];
      delete this._storage[this._start];

      return nextUp;
    }
  }

  size(){
    return this._end - this._start;
  }
}

/*let iphoneQueue = new Queue();

iphoneQueue.enqueue("{user: ILoveWindows@gmail.com}")
iphoneQueue.enqueue("{user: cortanaIsMyBestFriend@hotmail.com}")
iphoneQueue.enqueue("{user: InternetExplorer8Fan@outlook.com}")
iphoneQueue.enqueue("{user: IThrowApplesOutMyWindow@yahoo.com}")

console.log("size:", iphoneQueue.size());

while(iphoneQueue.size() > 0){
  console.log(iphoneQueue.dequeue());
}

console.log("size:", iphoneQueue.size());*/

//enqueue (addition) : O(1)
//dequeue (removal) : O(1)
//size : O(1)

module.exports = Queue;