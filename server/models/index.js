// 要拿到任何 models，只需要 require models 就好。
// 只要 require 「models」資料夾，就會得到下面的 object，
// 這個 object 裡面會有 user、course 這兩個屬性，
// 分別代表我們製作好的兩個 model：user、course。
module.exports = {
    user: require("./user-model"),
    course: require("./course-model"),
};