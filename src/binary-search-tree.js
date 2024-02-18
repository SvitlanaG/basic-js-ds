const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.topNode = null;
  }

  root() {
    return this.topNode;
  }

  add(data) {
    const newDataNode = new Node(data);

    if (this.topNode === null) {
      this.topNode = newDataNode;
      return this;
    }

    let currentNode = this.topNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return undefined;
      }
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newDataNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newDataNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this._find(data, this.topNode);
  }

  _find(data, currentNode) {
    if (!currentNode) {
      return null;
    } else if (data < currentNode.data) {
      return this._find(data, currentNode.left);
    } else if (data > currentNode.data) {
      return this._find(data, currentNode.right);
    } else {
      return currentNode;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.topNode;
    if (currentNode.left === null) {
      return currentNode.data;
    }
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.topNode;
    if (currentNode.right === null) {
      return currentNode.data;
    }
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
