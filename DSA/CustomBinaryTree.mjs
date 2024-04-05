import TreeNode from "./TreeNode.mjs";
class CustomBinaryTree {
    constructor() {
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    add(value){
        let node=new TreeNode(value)
        if (this.isEmpty()){
            this.root=node
            return
        }
        else
            this.insertNode(this.root,node)
    }

    insertNode(currentNode,newNode){
        if (newNode.data>currentNode.data){
            if (currentNode.right === null){
                currentNode.right=newNode
                return;
            }
            else
                this.insertNode(currentNode.right,newNode)
        }
        else if (newNode.data<currentNode.data){
            if (currentNode.left === null){
                currentNode.left=newNode
                return;
            }
            else
                this.insertNode(currentNode.left,newNode)
        }
        else
            return;
    }

    search(value,currentNode=this.root){
        if (!this.root)
            return false
        else if (typeof currentNode.data ==null)
            return false
        else {
            if (value==currentNode.data)
                return true
            else if (value > currentNode.left)
                this.search(value,currentNode.right)
            else if (value < currentNode.data)
                this.search(value,currentNode.left)
        }
    }


    inOrderTraversal(currentNode=this.root){
        if (currentNode != null) {
            this.inOrderTraversal(currentNode.left)
            console.log(currentNode.data)
            this.inOrderTraversal(currentNode.right)
        }
    }

    preorderTraversal(currentNode = this.root) {
        if (currentNode !== null) {
            console.log(currentNode.data);
            this.preorderTraversal(currentNode.left);
            this.preorderTraversal(currentNode.right);
        }
    }

    postorderTraversal(currentNode = this.root) {
        if (currentNode !== null) {
            this.postorderTraversal(currentNode.left);
            this.postorderTraversal(currentNode.right);
            console.log(currentNode.data);
        }
    }
}
let tree=new CustomBinaryTree()
tree.add(10)
tree.add(3)
tree.add(25)
tree.add(17)
tree.add(9)
// console.log(tree.search(10))
console.log(tree.search(2))
// tree.inOrderTraversal()
// tree.postorderTraversal()
tree.preorderTraversal()
