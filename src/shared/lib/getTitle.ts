export const getTitle = (title: string): string => {
  const chars = title.split("")
  const firstChar = chars.shift()
  if (firstChar) {
    return [firstChar.toUpperCase(), ...chars].join('')
  } else {
    return ''
  }
}