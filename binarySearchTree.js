  class Node {
      constructor(val) {
          this.value = val;
          this.left = null;
          this.right = null;
      }
  }

  class BST {
      constructor() {
          this.root = null;
      }
//       insert(val) {
//           const newNode = new Node(val);
//           if(traverse(this.root)) this.root = newNode;

//           function traverse(current) {
//             if(current === null) return true;

//             if(newNode.value > current.value) {
//               if (traverse(current.right)) {
//                 current.right = newNode;
//               }
//             } else if (newNode.value < current.value) {
//               current.left = newNode;
//             }
//             return false;
//           }
//           return this;
//       }

      insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

      contains(searchVal) {
        const findMe = searchVal;
        if(!this.root) return false;

        var current = this.root;
        var found = false;

        while(!found && current) {
          if (searchVal < current.value) {
            // go left
            current = current.left;
          } else if (searchVal > current.value) {
            // go right
            current = current.right;
          } else {
            found = true;
          }
        }
        return current ? !!current : undefined;
      }

      bredthFirst() {
        const theQueue = [];
        const visited = [];
        theQueue.push(this.root);
        while(theQueue.length > 0) {
          let dequeued = theQueue.shift();
            visited.push(dequeued.value); // value pushed to make it easier to read but just node pushed in prod mode
            if(dequeued.left) {
              theQueue.push(dequeued.left);
            }
            if(dequeued.right) {
              theQueue.push(dequeued.right);
            }
        }
        return visited;
      }

      preOrder_DFS() {
        if(!this.root) return undefined;
        const visited = [];
        function helpDFS(node) {
          visited.push(node.value); // left value on for dev mode but in prod remove value and show nodes
          if(node.left) helpDFS(node.left);
          if(node.right) helpDFS(node.right);
        }
        helpDFS(this.root);
        return visited;
      }

      postOrder_DFS() {
        if(!this.root) return undefined;
        const visited = [];
        function helpDFS(node) {
          if(node.left) helpDFS(node.left);
          if(node.right) helpDFS(node.right);
          visited.push(node.value); // value on for dev mode but in prod remove value and show nodes

        }
        helpDFS(this.root);
        return visited;
      }

      inOrder_DFS() {
        if(!this.root) return undefined;
        const visited = [];
        function helpDFS(node) {
          if(node.left) helpDFS(node.left);
          visited.push(node.value); // value on for dev mode but in prod remove value and show nodes
          if(node.right) helpDFS(node.right);
        }
        helpDFS(this.root);
        return visited
      }

  }

//              8   
//          4        15
//        1   5     10  25
//              6      17  33

// q = [8]
// v = [8]

var tree = new BST()
tree.insert(8);
tree.insert(4);
tree.insert(15);
tree.insert(1);
tree.insert(10);
tree.insert(5);
tree.insert(25);
tree.insert(6);
tree.insert(17);
tree.insert(33);

