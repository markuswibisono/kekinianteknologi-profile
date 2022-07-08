

import {
  BrowserRouter

} from "react-router-dom";

import { Link } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter basename="/testing-hosting">
      <Link to="/today"> testing link </Link>
   </BrowserRouter>
  );
}
