export const changeTreeNode: (tree: any[], nodeKey: string, value: any) => any[] = (tree: any[], nodeKey: string, value: any) => {
  return tree.map(node => {
    if (nodeKey == node?.path) {
      console.log(node)
      const newNode = {
        ...node,
        name: value,
        children: changeTreeNode(node?.children || [], nodeKey, value)
      }
      return newNode
    } else {
      return node
    }
  })
}

export const findTreeNode = (tree: any[], nodeKey: string) => new Promise((resolve, reject) => {
  tree.forEach(node => {
    if (node?.path === nodeKey) {
      console.log(node)
      resolve(node)
    } else {
      findTreeNode(node?.children || [], nodeKey).then(res => {
        resolve(res)
      })
    }
  })
})