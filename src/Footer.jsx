import React from "react";

const yearNow = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {yearNow}</p>
    </footer>
  );
}

export default Footer;
