import { useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";

function App() {
  useEffect(() => {
    try {
      if (import.meta.env.MODE === "production") {
        axios.get("https://myshopx.net/api/newvisit/clipthat");
      }
    } catch (error) {}
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
