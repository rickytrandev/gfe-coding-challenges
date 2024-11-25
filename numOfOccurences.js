export const numOfOccurences = (str) => {
  str = str.split('')
  
  return str.reduce((acc, l) => {
    if (!acc[l]) {
      acc[l] = 1
    } else {
      acc[l] ++
    }
    
    return acc
  }, {})
};``
