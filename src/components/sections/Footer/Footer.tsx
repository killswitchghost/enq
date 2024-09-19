import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@shared/ThemeToggle/ThemeToggle";
import ListAccordion from "@shared/ListAccordion/ListAccordion";
import ExpandBox from "@components/shared/ExpandBox/ExpandBox";
import Logo from "@shared/Logo/Logo";
import styles from "./_Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Usage in the parent component:

const Footer = () => {
  return (
    <footer className={`${styles.footerSection}`}>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-4">
            <div className={styles.footerLogo}>
              <Logo />
            </div>
            <small className="fs-8 mb-5">
              Enqbator is at the forefront of creating innovative digital
              solutions. Whatever your industry, the Enqbator team will find the
              best solution, uniquely created just for you. Our knowledgeable
              and experienced design and development teams will work together to
              bring success to you, your users, and your brand.
            </small>
          </div>
          <div className="col-lg-4">
            <ExpandBox
              title="Explore"
              content="<ul class='list-unstyled'><li><a href='#' class='underline'><span>Lorem</span></a></li><li><a href='#' class='underline'><span>Lorem</span></a></li><li><a href='#' class='underline'><span>Lorem</span></a></li><li><a href='#' class='underline'><span>Lorem</span></a></li></ul>"
            />
          </div>
          <div className="col-lg-4">
            <ExpandBox
              title="Sample Heading"
              content="<ul class='list-unstyled'>
              <li><a href='#' class='underline'><span>Link</span></a></li>
               <li><a href='#' class='underline'><span>Link</span></a></li>
                <li><a href='#' class='underline'><span>Link</span></a></li>
                 <li><a href='#' class='underline'><span>Link</span></a></li></ul>"
            />
            <h6 className="mt-5 mb-3">Follow us on:</h6>

            <div className={styles.footerSocialLinks}>
              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/linkedin.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/twitter.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>

              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/instagram.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </div>
        </div> */}

        <div className={`${styles.footerBottomRow} row`}>
          <div className="col-lg-3">
            <p> © {new Date().getFullYear()} Enqbator. All Rights Reserved.</p>
            <Link href="#" className="underline">
              <span>Privacy Policy</span>
            </Link>{" "}
            |{" "}
            <Link href="#" className="underline">
              <span>Terms of Use</span>
            </Link>
          </div>
          <div className="col-lg-3">
            <p>Preferences </p> <ThemeToggle />
          </div>
          <div className="col-lg-3">
            <p>Language</p>
            <button className="btn btn-sm btn-primary">US - English</button>
          </div>
          <div className="col-lg-3">
            <p>Stalk us on</p>
            <div className={styles.footerSocialLinks}>
              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/linkedin.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/twitter.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>

              <Link href="#" className={`${styles.footerSocialLink} btn`}>
                <Image
                  src="/img/social/instagram.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
