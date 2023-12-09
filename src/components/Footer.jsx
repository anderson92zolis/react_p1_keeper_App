import React from 'react';


function Footer() {

  const currentYear = new Date().getFullYear();
    return (
      <footer >
       <p>© CopyRight {currentYear} All rights reserved.</p>
      </footer>
    )
  }

export default Footer