import { useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    //
  }, []);

  return (
    <div className={`app loaded`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2025 Vitali. All rights reserved</p>
      </motion.footer>
    </div>
  );
}

export default App;
