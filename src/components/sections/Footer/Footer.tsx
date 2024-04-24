import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../../shared/ThemeToggle';
import './_Footer.scss';
const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="container py-4">

<div className="row megamenu-utility">
                <div className="col-lg-4">
               <p>Social</p>
                   x f v
                </div>
                <div className="col-lg-4"> <p>Preferences </p>  <ThemeToggle />

                </div>
                <div className="col-lg-4"> Language<br />
<button className="btn btn-sm btn-primary glow-on">US - English</button><br />

<small>Powered by Enqbator AI</small>
</div>
</div>



        <div className="text-center py-3">
          © {new Date().getFullYear()} Enqbator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
