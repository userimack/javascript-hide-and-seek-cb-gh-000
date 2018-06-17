function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector('div.target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<lis.length; i++){
   lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}
