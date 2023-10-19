// 导入路由
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "./utils";

import { AuthRoute } from "@/components/AuthRoute";

// 导入页面组件
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import Article from "@/pages/Article";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";

import "./index.css";

// 配置路由规则
function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          >
            {/* 二级路由默认页面 */}
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
