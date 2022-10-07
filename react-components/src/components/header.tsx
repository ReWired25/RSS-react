import React from 'react';

import Navigation from './navigation';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Navigation
          links={[
            { path: '/', name: 'Main' },
            { path: '/about-us', name: 'About Us' },
          ]}
        />
      </header>
    );
  }
}

export default Header;
