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

  remove(data) {
    if (!data || !this.has(data)) {
      return null;
    }
    this.topNode = this._remove(data, this.topNode);
    return this;
  }

  _remove(data, currentNode) {
    if (!currentNode) {
      return null;
    }
    if (data < currentNode.data) {
      currentNode.left = this._remove(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this._remove(data, currentNode.right);
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null;
      } else if (!currentNode.left) {
        return currentNode.right;
      } else if (!currentNode.right) {
        return currentNode.left;
      } else {
        const min = this._findMin(currentNode.right);
        currentNode.data = min;
        currentNode.right = this._remove(min, currentNode.right);
      }
    }
    return currentNode;
  }

  _findMin(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
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
