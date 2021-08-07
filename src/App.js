import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import { Bookmark, BookOpen, Edit2, Settings } from "react-feather";
import Leaderboard from "./components/leaderboard/leaderboard";
import LessonCard from "./components/lesson-card/lessonCard";
import Asidebar from "./components/asidebar/asidebar";

function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar
          value={value}
          value2={value2}
          setValue={(value) => setValue(value)}
          setValue2={(value) => setValue2(value)}
        />
        <div style={{ height: "100%", display: "flex" }}>
          <div className="custom-tabs">
            <div
              className={value2 === 0 ? "tab active" : "tab"}
              onClick={() => setValue2(0)}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </div>
            <div
              className={value2 === 1 ? "tab active" : "tab"}
              onClick={() => setValue2(1)}
            >
              <i className="fas fa-toolbox"></i>
              <span>Tutoring</span>
            </div>
            <div
              className={value2 === 2 ? "tab active" : "tab"}
              onClick={() => setValue2(2)}
            >
              <BookOpen size={15} />
              <span>My courses</span>
            </div>
            <div
              className={value2 === 3 ? "tab active" : "tab"}
              onClick={() => setValue2(3)}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>My school</span>
            </div>
            <div
              className={value2 === 4 ? "tab active" : "tab"}
              onClick={() => setValue2(4)}
            >
              <i className="fas fa-file-signature"></i>
              <span>Tests</span>
            </div>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#aaa",
                margin: "15px 0",
              }}
            ></div>
            <div
              className={value2 === 5 ? "tab active" : "tab"}
              onClick={() => setValue2(5)}
            >
              <Edit2 size={15} />
              <span>Notes</span>
            </div>
            <div
              className={value2 === 6 ? "tab active" : "tab"}
              onClick={() => setValue2(6)}
            >
              <Bookmark size={15} />
              <span>Bookmarks</span>
            </div>
            <div
              className={value2 === 7 ? "tab active" : "tab"}
              onClick={() => setValue2(7)}
            >
              <Settings size={15} />
              <span>Settings</span>
            </div>
          </div>
          <div className="contents">
            <div className="left">
              <h1 className="greetings">Hi, champion!</h1>
              <div className="lesson">
                <h5>Upcoming lessons</h5>
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
              </div>
              <div className="leaderboard-container">
                <Leaderboard />
              </div>
            </div>
            <div className="right">
              <Asidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
