
import ReponsiveGrid from "./ReponsiveGrid";


   
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import Login from "./aditya-login";
export default function App() {
  return (
    <main className="bg-[#f7f2f2]">
    <ReponsiveGrid />      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/test' element={<Login/>}/>
      </Routes>

      <Button>Click me</Button>
    </main>
  );
}
