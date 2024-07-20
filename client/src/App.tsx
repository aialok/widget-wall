import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Button>Click me</Button>
    </main>
  );
}
