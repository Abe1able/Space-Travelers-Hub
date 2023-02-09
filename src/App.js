import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import Navbar from './components/navbar/navbar';
import MissionPage from './pages/Mission';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    // <div>
    //   <Navbar />
    // </div>
    <Routes>
      <Route path="/missions" element={<MissionPage />} />
    </Routes>
  );
}

export default App;
