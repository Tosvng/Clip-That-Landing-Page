import { useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";

function App() {
  useEffect(() => {
    try {
      axios.get("https://myshopx.net/api/email/newvisit");
    } catch (error) {}
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
