import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    AuthService.logout(); // 清空 local storage
    window.alert("登出成功！現在您會被導向到首頁。");
    setCurrentUser(null);
  };

  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    首頁
                  </Link>
                </li>

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者，就不會出現「註冊會員」的按鈕 */}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      註冊會員
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者，就不會出現「會員登入」的按鈕 */}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      會員登入
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者，才能出現「登出」的按鈕 */}
                {currentUser && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="/">
                      登出
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者，才能出現「個人頁面」的按鈕 */}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      個人頁面
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者，才能出現「課程頁面」的按鈕 */}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/course">
                      課程頁面
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者， */}
                {/* 且 role 為 instructor 才能出現「新增課程」的按鈕 */}
                {currentUser && currentUser.user.role == "instructor" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/postCourse">
                      新增課程
                    </Link>
                  </li>
                )}

                {/* 若 currentUser 是 true，表示已成功登入並找到該使用者， */}
                {/* 且 role 為 student 才能出現「註冊課程」的按鈕 */}
                {currentUser && currentUser.user.role == "student" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/enroll">
                      註冊課程
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
