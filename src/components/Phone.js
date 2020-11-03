import React from 'react'

const Phone = () => {
  return (
    <div className="phone-bar">
      <div className="logo">
        <a href="https://www.remoteroofing.com">
          <img
            src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png"
            alt="Remote Roofing Logo"
          />
        </a>
      </div>
      <div className="phone">
        <img
          src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png"
          alt="Call Remote Roofing"
        />
        <a href="tel:+1-800-401-7716">
          <strong>+1 (800) 401-7716</strong>
        </a>
      </div>
    </div>
  );
};
    
export default Phone