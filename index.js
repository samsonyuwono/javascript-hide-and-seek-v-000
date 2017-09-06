function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var nextNode= node.children[0]

    while(nextNode){
      node = nextNode
      nextNode= node.children[0]
    }
    return node
}

function increaseRankBy(n){
  var allLists= document.querySelectorAll('.ranked-list')
    for(var i= 0; i< allLists.length; i++){
      var children = allLists[i].children

      for(var k=0; k<children.length; k++){
        children[k].innerHTML= parseInt(children[k].innerHTML)+ n
      }
    }



}
