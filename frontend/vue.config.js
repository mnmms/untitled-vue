// module.exports = {
//   devServer: {
//     proxy: {
//       '/': {
//         target: 'http://localhost:3000',
//         changeOrigin: true
//       }
//     }
//   }
// }
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
}
