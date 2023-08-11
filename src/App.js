import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import BatchDetails from "./components/Landingpage/Batches/BatchDetails/BatchDetails"
import Batches from "./components/Landingpage/Batches/Batches";
import Overview from "./components/Landingpage/Batches/BatchDetails/Views/Overview/Overview";
import Attendance from "./components/Landingpage/Batches/BatchDetails/Views/Attendance/Attendance";
import Students from "./components/Landingpage/Batches/BatchDetails/Views/Students/Students";
import Assignments from "./components/Landingpage/Batches/BatchDetails/Views/Assignments/Assignments";
import Announcements from "./components/Landingpage/Batches/BatchDetails/Views/Announcements/Announcements";
import Tests from "./components/Landingpage/Batches/BatchDetails/Views/Tests/Tests";
import Videos from "./components/Landingpage/Batches/BatchDetails/Views/Videos/Videos";
import LiveClasses from "./components/Landingpage/Batches/BatchDetails/Views/LiveClasses/LiveClasses";
import StudyMaterials from "./components/Landingpage/Batches/BatchDetails/Views/StudyMaterials/StudyMaterials";
import Settings from "./components/Landingpage/Batches/BatchDetails/Views/Settings/Settings";
import NoMatch from "./components/Landingpage/NoMatch/NoMatch";
import Active from "./components/Landingpage/Batches/BatchDetails/Views/Students/Active/Active";
import Inactive from "./components/Landingpage/Batches/BatchDetails/Views/Students/Inactive/Inactive";
import WatingList from "./components/Landingpage/Batches/BatchDetails/Views/Students/WaitingList/WaitingList";
import WaitingList from "./components/Landingpage/Batches/BatchDetails/Views/Students/WaitingList/WaitingList";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main_view">
        <Routes>
          <Route index element={<Batches />} />
          <Route path="/" element={<Batches />} />
          <Route path="/batchdetails/:id" element={<BatchDetails />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="students" element={<Students />}>
              <Route index element={<Active />} />
              <Route path="active" element={<Active />} />
              <Route path="inactive" element={<Inactive />} />
              <Route path="waitinglist" element={<WaitingList/>} />
            </Route>
            <Route path="assignments" element={<Assignments />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="tests" element={<Tests />} />
            <Route path="videos" element={<Videos />} />
            <Route path="liveclasses" element={<LiveClasses />} />
            <Route path="studymaterials" element={<StudyMaterials />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
