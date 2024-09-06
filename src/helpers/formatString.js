export const formatString = str => str.replaceAll('-', ' ')
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')
