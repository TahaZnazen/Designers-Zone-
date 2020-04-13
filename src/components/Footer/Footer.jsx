import React from "react";

function Footer(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="palette-footer">
      {paletteName}
      <span className="footer-emoji">{emoji}</span>
    </footer>
  );
}

export default Footer;
