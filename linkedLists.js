class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    const prevNode = this.headNode;

    this.headNode = newNode;
    newNode.next = prevNode;

    this.length++;
  }

  // returns the total number of nodes in the list
  size() {
    return this.length;
  }

  // returns the first node in the list
  getHead() {
    return this.headNode;
  }

  // returns the last node in the list
  getTail() {
    let currentNode = this.headNode;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // returns the node at the given index
  getNodeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.headNode;
    let count = 0;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  // removes the last element from the list
  pop() {
    if (!this.headNode) {
      return;
    }

    if (!this.headNode.next) {
      this.headNode = null;
      this.length = 0;
      return;
    }

    let currentNode = this.headNode;
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.length--;
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    let currentNode = this.headNode;
    let count = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }

      currentNode = currentNode.next;
      count++;
    }

    return null;
  }

  // represents your LinkedList objects as strings
  toString() {
    let currentNode = this.headNode;
    let string = "";

    if (!currentNode) {
      string = "null";
    } else {
      string = `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    string += "null";

    return string;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.headNode;
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;
      let prevNode = null;
      let count = 0;

      while (count < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }

      prevNode.next = newNode;
      newNode.next = currentNode;
    }

    this.length++;
  }
}

const list = new LinkedList();

list.append("1");
list.append("2");
list.append("3");
list.append("4");

list.prepend("Co?");

list.insertAt("Chuj", 2);

console.log(list.toString());
