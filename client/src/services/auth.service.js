import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    // 執行 register() 時，會自動 post 到 API_URL + "/register"，
    // 並代入 username, email, password, role 這四個參數。
    // 若註冊成功，就會 return a Promise Object，並且其為 fulfilled
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
