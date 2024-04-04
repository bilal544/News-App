import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Loader from './Components/Loader';
const Home = React.lazy(() => import('./Pages/Home'));
const Business = React.lazy(() => import('./Pages/Business'));
const Sports = React.lazy(() => import('./Pages/Sports'));
const Technology = React.lazy(() => import('./Pages/Technology'));
const Health = React.lazy(() => import('./Pages/Health'));
const Entertainment = React.lazy(() => import('./Pages/Entertainment'));

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='' element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
        <Route path='business' element={<Suspense fallback={<Loader />}><Business /></Suspense>} />
        <Route path='entertainment' element={<Suspense fallback={<Loader />}><Entertainment /></Suspense>} />
        <Route path='sports' element={<Suspense fallback={<Loader />}><Sports /></Suspense>} />
        <Route path='technology' element={<Suspense fallback={<Loader />}><Technology /></Suspense>} />
        <Route path='health' element={<Suspense fallback={<Loader />}><Health /></Suspense>} />
      </Route>
    </Routes>
  )
}

export default App