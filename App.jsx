import React from "react";
import "./styles.css";
import Head from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

 function App() {
  return (
    <div>
   <Head />
   <Note />
   <Footer />
    </div>
  );
}
export default App;