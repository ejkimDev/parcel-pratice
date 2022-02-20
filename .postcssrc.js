// postcssrc.js 이름의 파일을 생성하면 parcel-bundler가 찾아서 구성옵션으로 사용함
// NodeJs 환경에선 import 대신에 require(), export 대신에 module.exports 사용

// import autoprefixer from 'autoprefixer'와 같음
const autoprefixer = require('autoprefixer');

/* export {
  Plugins: [
    autoprefixer
  ]
} 와 같음 */
module.exports = {
  plugins: [
    autoprefixer
  ]
}

// 간소화시키면
/* module.exports = {
  Plugins: [
    require('autoprefixer')
  ]
} */