const getElementsByClassName = (className, node) => {
  // Recursively traversing through the DOM, non-nested method solution
  let results = [];

  if (!node) {
    node = document.body;
  } else {
    node;
  }

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  const children = node.childNodes;
  if (children) {
    for (const child of children) {
      results = results.concat(getElementsByClassName(className, child));
    }
  }
  return results;
};

module.exports = { getElementsByClassName };

// *** The code below goes against clean coding standards but was kept ***
// *** for learning purposes for my partner, similar solution to above ***
// *** method inside method
//
// const getElementsByClassName = (className) => {
//   let output = []
//   let dom = document.documentElement

//   let findClass = function(node){
//     if (node.classList && node.classList.contains(className)){
//       output.push(node)
//     }
//     if (node.childNodes){
//       node.childNodes.forEach((element) => {
//         findClass(element)
//       })
//     }
//   }
//   findClass(dom)
//   return output
// }
