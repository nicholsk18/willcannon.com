export function move(array: Array<any>, fromIndex: number, toIndex: number) {
  if (
    fromIndex < 0 ||
    fromIndex >= array.length ||
    toIndex < 0 ||
    toIndex >= array.length
  ) {
    return array
  }

  const newArray = [...array] // Create a shallow copy to avoid mutating the original array
  const [item] = newArray.splice(fromIndex, 1) // Remove the item from the original position
  newArray.splice(toIndex, 0, item) // Insert the item at the new position
  return newArray
}
