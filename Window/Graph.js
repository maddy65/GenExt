function Node(data,next) {  
  this.data = data;
  this.next = next;
};

Node.prototype.getData = function() {  
  console.log(this.data);
};

function LinkedList() {  
  this.head = new Node(null, null);
  this.length = 0;
};

LinkedList.prototype.prettyPrint = function() {  
  const cur = this.head;
  let result = "";

  while(cur != null){
    if(cur.next == null){
      result += cur.data;
    } else {
      result += cur.data + ", ";
    }
    cur = cur.next;
  }
  console.log(result);
};

LinkedList.prototype.append = function(data) {  
  if(this.head.data == null){ 
    this.head = new Node(data, null);
  } else {
    let cur = this.head;
    while(cur.next != null){
      cur = cur.next;
    }
    const node = new Node(data, null);
    cur.next = node;
  }
  this.length += 1;
};

LinkedList.prototype.prepend = function(data) {  
  if(this.head.data == null){
    this.head = new Node(data, null);
  } else {
    let node = new Node(data, this.head);
    this.head = node;
  }
  this.length += 1;
};

LinkedList.prototype.getHead = function(data) {  
  return this.head;
};

LinkedList.prototype.get = function(offset) {  
  if(offset < this.length) {
    var cur = this.head;
    for(var i = 0; i < offset; i++) {
      cur = cur.next;
    }
    return cur;
  } else {   
    return "you asked for an element outside the list";
  }
};

LinkedList.prototype.remove = function(data) {  
  // front of the list
  if(this.head.data == data) {
    var cur = this.head;
    cur = cur.next;
    this.head = cur;
    return true;
  } else {
    var cur = this.head;
    var prev = this.head;
    var counter = 0;
    while(cur.data != data) {
      if(counter < this.length) {
        if(counter > 0){
          prev = prev.next;
        }
        cur = cur.next;
        counter +=1;
      } else {
        return false;
      }
    } //assumes element was found
    //if element was last in the list.
    if(counter == this.length -1) {
      prev.next = null;
      delete cur;
      return true;
    } else { // somewhere in the middle
      cur = cur.next;
      prev.next = cur;
      return true;    
    }
  }
};

const ll = new LinkedList();  
ll.append(5);  
ll.append(7);  
ll.append(6);  
ll.prepend(14);  
ll.prepend(4);  
ll.prettyPrint();  
ll.remove(14);  
ll.remove(6);  
ll.remove(4);  
ll.prettyPrint();  
