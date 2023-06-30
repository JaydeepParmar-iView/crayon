import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Main from './views/Main'
import Jobs from './components/guest/jobs/Jobs';
import Talent from './components/guest/talent/Talent';
import MyJobs from './components/employer/myJobs/MyJobs';
import Search from './components/admin/search/Search';
import AdminTalent from './components/admin/adminTalent/AdminTalent';
import AdminJobs from './components/admin/adminJobs/AdminJobs';
import BuildSearch from './components/admin/search/BuildSearch';
import JobTitles from './components/admin/search/JobTitles';
import ActiveJobs from './components/admin/adminJobs/ActiveJobs';
import ActiveJobDetail from './components/admin/adminJobs/ActiveJobDetail';
import AllTalent from './components/admin/adminTalent/AllTalent';
import Admin from './components/admin/index';
import MyJobsCandidate from './components/candidate/myJobs/MyJobs';
import MyCV from './components/candidate/myCV/MyCV';
import ComingSoon from './components/common/ComingSoon';
import Solutions from './components/guest/solutions/Solutions';
import Candidate from './components/candidate';
import Employer from './components/employer';
import PostAJob from './components/employer/postAJob/PostAJob';
import MyProfileCan from './components/candidate/myProfile/MyProfile';
import MyProfileEmp from './components/employer/myProfile/MyProfile';
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';
import PendingJobs from './components/admin/adminJobs/pendingJobs/PendingJobs';

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main />} >
        <Route path='/' element={<Home />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='talent' element={<Talent />} />
        {/* <Route path='solutions' element={<Solutions />} /> */}

        <Route exact path='employer' element={<PrivateRoute><Employer /></PrivateRoute>} >
          <Route path='my-jobs' element={<PrivateRoute><MyJobs /></PrivateRoute>} />
          <Route path='post-a-job' element={<PrivateRoute><PostAJob /></PrivateRoute>} />
          <Route path='my-profile' element={<PrivateRoute><MyProfileEmp /></PrivateRoute>} />
        </Route>

        <Route exact path='candidate' element={<PrivateRoute><Candidate /></PrivateRoute>} >
          <Route path='my-jobs' element={<PrivateRoute><MyJobsCandidate /></PrivateRoute>} />
          <Route path='my-cv' element={<PrivateRoute><MyCV /></PrivateRoute>} />
          <Route path='my-profile' element={<PrivateRoute><MyProfileCan /></PrivateRoute>} />
        </Route>

        <Route exact path='admin' element={<PrivateRoute><Admin /></PrivateRoute>} >
          <Route path='admin-talent' element={<PrivateRoute><AdminTalent /></PrivateRoute>} >
            <Route path='all-talent' element={<PrivateRoute><AllTalent /></PrivateRoute>} />
          </Route>
          <Route path='adminJobs' element={<PrivateRoute><AdminJobs /></PrivateRoute>} >
            <Route path='active-jobs' element={<PrivateRoute><ActiveJobs /></PrivateRoute>} />
            <Route path='active-jobs/:id' element={<PrivateRoute><ActiveJobDetail /></PrivateRoute>} />
            <Route path='pending-jobs' element={<PrivateRoute><PendingJobs /></PrivateRoute>} />
          </Route>
          <Route path='Search' element={<PrivateRoute><Search /></PrivateRoute>} >
            <Route path='build-search' element={<PrivateRoute><BuildSearch /></PrivateRoute>} />
            <Route path='job-titles' element={<PrivateRoute><JobTitles /></PrivateRoute>} />
          </Route>
          <Route path='*' element={<PrivateRoute><ComingSoon /></PrivateRoute>} />
        </Route>

        <Route path='*' element={<ComingSoon />} />
      </Route>
      <Route path='*' element={<PrivateRoute><ComingSoon /></PrivateRoute>} />
    </Routes>
  );
}

