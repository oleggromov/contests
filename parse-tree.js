
class TreeNode {
  constructor (value = null) {
    this.value = value
    this.children = []
  }
}

const outputTree = (node, depth = 0) => {
  const spaces = new Array(depth * 2 + 1).join(' ')
  console.log(`${spaces}${node.value}`)
  node.children.forEach(node => outputTree(node, depth + 1))
}

// const exampleTree = new TreeNode()
// exampleTree.children = [
//   new TreeNode('First #1'),
//   new TreeNode('First #2'),
// ]
// exampleTree.children[0].children = [
//   new TreeNode('Second #1')
// ]

// outputTree(exampleTree)

const parseTree = str => {
  const root = new TreeNode
  const path = [root]

  for (let chunk of str.split('\n')) {
    const match = chunk.match(/(\s*)(.*)/)

    if (match && match[1].length % 2 !== 0) {
      throw new Error(`Illegal indentation: '${chunk}'`)
    }

    const index = (match[1].length / 2) + 1
    if (index > path.length) {
      throw new Error(`Illegal next depth: '${chunk}', for a path of length: ${path.length}`)
    }

    const node = new TreeNode(match[2])

    if (index < path.length) {
      path.length = index
    }

    if (index <= path.length) {
      path.push(node)
    }

    path[index - 1].children.push(node)
  }

  return root
}

const input = `First
  Second
    Third
First #2
  Second #2
    Third #2
      Fourth
Third #3
First #3
  Second #3
    Fifth
      Sixths
        Sevenths
    Second XXX`

outputTree(parseTree(input))
