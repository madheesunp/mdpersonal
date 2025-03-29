import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alterVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alterVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Hello <span>World</span>
      </Button>
    </div>
  );
}

export default App;
