class Node {
    constructor (value) {
      this.value = value
      this.right = null
      this.left = null
    }
  }
  
class Tree {
    constructor () {
      this.root = null
    }
  
    isEmpty () {
      return this.root === null
    }
  
    add (value) {
      if (this.isEmpty()) {
        this.root = new Node(value)
        return
      }
  
      var aux = this.root
  
      while (aux) {
        if (value < aux.value) {
          if (aux.left) {
            aux = aux.left
          } else {
            aux.left = new Node(value)
            return
          }
        } else { 
          if (aux.right) {
            aux = aux.right
          } else {
            aux.right = new Node(value)
            return
          }
        }
      }
    }
  
     addRecursive (value, node = this.root) {
      if (!node) {
        this.root = new Node(value)
        return
      }
  
      if (value < node.value) {
        if (node.left) {
          return this.addRecursive(value, node.left)
        }
        node.left = new Node(value)
        return
      } else { 
        if (node.right) {
          return this.addRecursive(value, node.right)
        }
        node.right = new Node(value)
        return
      }
    }
  
    find (value) {
      if (this.isEmpty()) {
        return null
      }
  
      var aux = this.root
      if (aux.value === value) {
        return aux
      }
  
      while(aux) {
        
        if (aux.value === value) {
          break
        }
    
        if (aux.value < value) {
          aux = aux.right
        } else if (aux.value > value) {
          
          aux = aux.left
        }
      }
      return aux
    }
  
    findRecursive(value, node = this.root) {
      if (node.value === value) {
        return node
      }
  
      if (node.value < value) {
        return this.findRecursive(value, node.right)
      } else if (node.value > value) {
        return this.findRecursive(value, node.left)
      }
    }
  
    findMin(node = this.root) {
      if (!this.isEmpty()) {
        while (node.left) {
          node = node.left
        }
        return node
      }
    }
  
    delete (value, node = this.root) {
      if (!node) {
        return null
      }
      if (node.value === value) {
        
        if (!node.left && !node.right) {
          return null
        }
        
        if (!node.left) {
          return node.right
        }
        
        if (!node.right) {
          return node.left
        }
  
        
        var temp = this.findMin(node.right)
        
        node.value = temp.value;
        
        node.right = this.delete(temp.value, node.right)
        return node;
      }
      
      if (node.value < value) {
        node.right = this.delete(value, node.right)
        return node
      }
      
      if (node.value > value) {
        node.left = this.delete(value, node.left)
        return node
      }
    }
    print (node = this.root) {
      if (!node) {
        return
      }
      this.print(node.left)
      console.log(node.value)
      this.print(node.right)
    }
    
    preOrder (node = this.root) {
      if (!node) {
        return
      }
      console.log(node.value)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
    
    postOrder (node = this.root) {
      if (!node) {
        return
      }
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
  
  var btree = new Tree()
  var arr = [1,'-',2,'*',2,'+',5]
  
  for (var i = 0; i < arr.length; i++) {
    btree.addRecursive(arr[i])
  }
  
  btree.preOrder()
  console.log()
  btree.postOrder()
  console.log()
  console.log(btree.find(12))
  console.log(btree.findRecursive(12))
  console.log(btree.find(4))
  btree.delete(12)
  console.log()
  btree.print()