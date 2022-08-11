import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <p>Brought to life by <span><a href="http://www.orionpalmer.com" target="_blank" rel="noopener noreferrer">Orion Palmer</a> in {year}</span>
    </p>
  </footer>
  );
}

export default Footer;
