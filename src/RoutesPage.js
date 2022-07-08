

import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";

import App from './App';


export default function RoutesPage() {
  return (
    <BrowserRouter basename="/testing-hosting">
        <Routes>
          <Route path="/app" element={<App />}>
          </Route>
      </Routes>
   </BrowserRouter>
  );
}
