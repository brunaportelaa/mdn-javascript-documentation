// Object.groupBy()
// New feature supported by Node.js versions v21 and beyond

const fantasy = [
    { series : 'game of thrones', books: 5, isFinished: false },
    { series : 'harry potter', books: 7, isFinished: true },
    { series : 'duna', books: 3, isFinished: true },
    { series : 'stormlight archive', books: 4, isFinished: false },
]

const isFinished = Object.groupBy(fantasy, ({ isFinished }) => isFinished)
console.log(isFinished)
// [Object: null prototype] {
//     false: [
//       { series: 'game of thrones', books: 5, isFinished: false },
//       { series: 'stormlight archive', books: 4, isFinished: false }
//     ],
//     true: [
//       { series: 'harry potter', books: 7, isFinished: true },
//       { series: 'duna', books: 3, isFinished: true }
//     ]
//   }