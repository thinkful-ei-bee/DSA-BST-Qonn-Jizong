const BinarySearchTree = require('./BinarySearchTree')







// this function gets the sum of the tree
function tree(t){
  if(!t){      
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

// Height of a BST
function TreeHeight(tree){
  if(!tree){
    return -1
  }
  let left = TreeHeight(tree.left)
  let right = TreeHeight(tree.right)
  return Math.max(left,right)+1
}

function main(){
  Tree = new BinarySearchTree
  let array = [3,1,4,6,9,2,5,7]

  for(item of array){
    Tree.insert(item,item)
  }
  console.log(tree(Tree))
  console.log('tree height')
  console.log(TreeHeight(Tree))
}


main()
