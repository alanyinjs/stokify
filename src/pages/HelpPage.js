import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => (
  <div>
    <h1>Help Page</h1>
    <p>Do you need help? Please find my details on the <Link to="/contact">Contact</Link> page</p>
  </div>
)

export default HelpPage;