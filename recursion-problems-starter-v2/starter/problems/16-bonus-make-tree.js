/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },

    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/
// prints all items unordered in nested objects
// const makeTree = (categories, parent=null ) => {
//   // if(parent=={}){
//   //   return parent
//   // }
//   if(categories.length==0){
//     return
//   }
//   let nullness=false
//   let tree=parent
//   if(parent==null){
//     nullness=true
//     tree={}
//   }
//   let i=0
//   let top=categories.find((item,index)=>{
//     i=index
//     debugger
//     if(nullness){
//       nullness=false
//       return item.parent==null
//     }else{
//       return item.parent==parent
//     }

//   })
//   let childID=categories[i].id
//   tree[childID]={}
//   categories.splice(i,1)
//   // let newParent=childID
//   debugger
//    tree[childID]=makeTree(categories,tree[childID])
//    return tree
//   // your code here
// };

//correct order:
// const makeTree = (categories, parent=null ) => {
//   // if(parent=={}){
//   //   return parent
//   // }
//   let parental=parent
//   if(categories.length==0){
//     return
//   }
//   let nullness=false
//   let tree=parent
//   if(parent==null){
//     nullness=true
//     tree={}
//   }
//   let i=0
//   let top=categories.find((item,index)=>{
//     i=index
//     debugger
//     if(nullness){
//       nullness=false
//       return item.parent==null
//     }else {
//       let itemsparent=item.parent
//       debugger
//       return item.parent==parent.id
//     }

//   })
//   let child=categories[i]
//   tree[child.id]={}
//   debugger
//   categories.splice(i,1)
//   // let newParent=childID
//   debugger
//    tree[child.id]=makeTree(categories,child)
//    return tree
//   // your code here
// };

// Find all children first then for each child make new tree. Turned the .find() into .forEach(), pushing into
//  new children array and then recursing on each child in the array, adding it to it's original parent in the tree
// const makeTree = (categories, parent=null) => {
//   // if(parent=={}){
//   //   return parent
//   // }
//   let parental=parent
//   if(categories.length==0){
//     return
//   }
//   let nullness=false
//   let tree=parent
//   if(parent==null){
//     nullness=true
//     tree={}
//   }
//   let i=0
//   let children=[]
//   categories.forEach((item,index)=>{
//     i=index
//     debugger
//     if(nullness){
//       if(item.parent==null){
//         children.push(item)
//       }
//     }else {
//       let itemsparent=item.parent
//       debugger
//       if(item.parent==parent.id){
//         children.push(item)
//       }
//     }
//   })
//   children.forEach(child=>{
//     tree[child.id]={}
//     categories=categories.filter(ele=>ele.id!==child.id)
//     debugger
//     tree[child.id]=makeTree(categories,child)
//   })

//   debugger

//   // let newParent=childID

//    return tree
//   // your code here
// };

// stopped turning the subtree into {parent, child} and instead just make it {child}
// got {animals: {mammals:undefined}} to print {} instead of undefined by making last call return {}
// refactored code to remove extra variables like i and index, nullness, etc. and redundancy
const makeTree = (categories, parent) => {
  if(categories.length==0){
    return {}
  }
  let tree={}
  let children=[]
  categories.forEach((item)=>{
    if(item.parent==parent){
      children.push(item)
    }
  })
  children.forEach(child=>{
    tree[child.id]=makeTree(categories.filter(ele=>ele.id!==child.id),child.id)
  })
  return tree
  // your code here
};

const { log } = require('console');
const util = require('util')

const categories1 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

console.log(util.inspect(tree1, {showHidden: false, depth: null, colors: true}))

const categories2 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
];
const tree2 = makeTree(categories2, null);
console.log(util.inspect(tree2, {showHidden: false, depth: null, colors: true}))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
