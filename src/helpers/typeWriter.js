const ms = 80

export function typeWriter (string, placeholder) {
  placeholder.innerHTML = ''
  const lines = string.split('<br>')
  let time = 0
  lines.forEach((line, num) => {
    const elem = placeholder.appendChild(document.createElement('p'))
    const chars = line.split('')
    chars.forEach((char, index) => setTimeout(() => { elem.textContent += char }, time + index * ms))
    time += line.length * ms
  })
}
