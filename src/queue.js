const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  getUnderlyingList() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    let currentNode = null;
    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    let firstElem = this.head.value;
    this.head = this.head.next;
    this.length--;
    return firstElem;
  }
}

module.exports = {
  Queue,
};
