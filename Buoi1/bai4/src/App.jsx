import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>Trang chủ</h1>

      {/* Nút login */}
      <button onClick={() => setShowLogin(true)}>Login</button>

      {/* Khi bấm nút mới hiện form */}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </div>
  );
}

export default App;