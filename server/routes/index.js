// 要拿到任何 route，只需要 require routes 就好。
// 只要 require 「routes」資料夾，就會得到下面的 object，
// 這個 object 裡面會有 auth 這個屬性，
// 分別代表我們製作好的兩個 route：auth。
module.exports = {
  auth: require("./auth"),
  course: require("./course-route"),
};
