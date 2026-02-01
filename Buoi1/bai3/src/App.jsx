import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [status, setStatus] = useState("");
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setStatus("success")}>Success</button>
      <button onClick={() => setStatus("warning")}>Warning</button>
      <button onClick={() => setStatus("error")}>Error</button>

      <Alert
        type={status}
        message={`This is a ${status} message`}
      />
    </div>
  );


}

export default App;
