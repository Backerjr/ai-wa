import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import LessonExperience from './pages/LessonExperience.jsx';
import ProgressView from './pages/ProgressView.jsx';
import ProfileSettings from './pages/ProfileSettings.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import AIQuizCreatorOld from './pages/AIQuizCreator.jsx';
import AIQuizCreator from './teacher/AIQuizCreator.tsx';
import AILessonCreator from './pages/AILessonCreator.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Onboarding from './pages/Onboarding.jsx';
import MobileView from './pages/MobileView.jsx';
import InteractiveDemo from './pages/InteractiveDemo.jsx';
import Community from './pages/Community.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/demo" element={<InteractiveDemo />} />
        <Route path="/mobile" element={<MobileView />} />
        <Route path="/community" element={<Community />} />

        {/* Student Routes */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/lesson" element={<LessonExperience />} />
        <Route path="/lesson/:id" element={<LessonExperience />} />
        <Route path="/progress" element={<ProgressView />} />
        <Route path="/profile" element={<ProfileSettings />} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/quiz" element={<AIQuizCreatorOld />} />
        <Route path="/teacher/create/quiz" element={<AIQuizCreator />} />
        <Route path="/teacher/create" element={<AILessonCreator />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
