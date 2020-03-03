function findClone(original, clone, target) {
  if (original === target) {
    return clone
  }

  for (let i = 0; i < original.children.length; i++) {
    const result = findClone(original.children[i], clone.children[i], target)
    if (result) {
      return result
    }
  }

  return null
}
