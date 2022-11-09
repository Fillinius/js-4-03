console.log(Number(console.log), String(console.log), Boolean(console.log))
// Вы не можете вывести код JS функции в консоль, потому что функции являются частью скомпилированного исполняемого файла браузера ... или, скорее, его движка JavaScript. Это нативный код.

console.log(
  Number({ name: 'Maxim' }),
  String({ name: 'Maxim' }),
  Boolean({ name: 'Maxim' })
)

console.log(Number(), String(Symbol('key')), Boolean(Symbol('key')))

console.log(Number(Number), String(Number), Boolean(Number))

console.log(Number(''), String(''), Boolean(''))

console.log(Number(0), String(0), Boolean(0))

console.log(Number(-10), String(-10), Boolean(-10))

console.log(Number('-105'), String('-105'), Boolean('-105'))

// const data = 'Max'
// console.log(Number(data), String(data), Boolean(data))
