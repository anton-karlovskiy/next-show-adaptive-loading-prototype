
import globalStyles from '../../styles/global.js';

const Layout = ({ children }) => (
  <div>
    {children}
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Layout;
