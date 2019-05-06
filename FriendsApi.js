const friendsPosible = [
  { name: 'Frank', age: 35 },
  { name: 'Ereca', age: 34 },
  { name: 'Jackson', age: 1 },
  { name: 'Jackson', age: 1 },
  { name: 'Gator', age: 2 },
  { name: 'Lizzie', age: 2 },
  { name: 'Reptar', age: 1 }
]

export function getFriendsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(friendsPosible)
    }, 2000)
  })
}