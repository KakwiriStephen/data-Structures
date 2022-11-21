//Tree traversal

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                // handling Duplicates
                if (value === current.value) return undefined;
                //left
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                    //right
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    //Tree traversal
    //BreadthWise
    BFS() {
        var node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
        }
    }
}

var tree = new BinarySearchTree();