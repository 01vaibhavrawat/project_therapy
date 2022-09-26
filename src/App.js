import "./styles/app.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import NavCom from "./pages/Navbar";
import Story from "./pages/StoryPage";
import Asessment from "./pages/Asessment";
import SignUp from "./pages/SignUp";
import Complete from "./pages/Complete";

import { STORIES } from "./shared/stories.js";
import { QUETIONS } from "./shared/quetions.js";
import { HP } from "./shared/homePageText.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import EmailForm from "./pages/EmailForm";

function App() {
  
  const [hp, setHp] = useState(HP);
  const [story, setStory] = useState(STORIES);
  const [quetion, setQuetion] = useState(QUETIONS);
  return (
    <BrowserRouter>
      <NavCom />
      <Routes>
        <Route path="/" element={<Home data={hp} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Story" element={<Story data={story} />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Asessment" element={<Asessment data={quetion} />} />
        <Route path="/Complete" element={<Complete />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/EmailForm" element={<EmailForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
