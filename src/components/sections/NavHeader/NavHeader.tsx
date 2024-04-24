import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from 'react-bootstrap';
import { Search, Menu, X, MessageSquare } from 'react-feather';
import './_NavHeader.scss';
import SvgArrow from '../../shared/SvgArrow/SvgArrow';
import Logo from '../../shared/Logo/Logo';
import Card from '../../shared/Card/Card';


const NavHeader = () => {




  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  const toggleSearchDropdown = () => {
    setSearchDropdownOpen(!searchDropdownOpen);
    if (menuDropdownOpen) setMenuDropdownOpen(false);
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
    if (searchDropdownOpen) setSearchDropdownOpen(false);
  };

  const getDropdownClass = (isOpen: boolean): string => isOpen ? "dropdown-menu show" : "dropdown-menu";

  const getNavHeaderClass = () => {
    let classes = "nav-header";
    if (searchDropdownOpen) classes += " search-open";
    if (menuDropdownOpen) classes += " menu-open";
    return classes;
  };


   const [activeBackground, setActiveBackground] = useState<string>('');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newBackground = event.currentTarget.getAttribute('data-bg-img');
        setActiveBackground(newBackground || '');
    };


    const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        setIsVisible(false);
document.body.classList.remove('nav-header-visible');
        document.body.classList.add('nav-header-hidden');
      } else {
        setIsVisible(true);
document.body.classList.add('nav-header-visible');
        document.body.classList.remove('nav-header-hidden');
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchDropdownOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchDropdownOpen]);


  return (

  <div className={`${getNavHeaderClass()} ${isVisible ? '' : 'hidden'}`}>


      <Link href="/" className="btn-brand">
<Logo />
</Link>

<div className="btn-nav-wrap">

<div className="btn-contact-wrap">
{/* <Link href="#" className="btn btn-outline btn-contact" aria-label="Get in Touch"><MessageSquare /> <span>Get in Touch</span></Link> */}
<Link href="#" className="btn btn-outline btn-contact"><i className="bi bi-chat-left-dots"></i><span>Get in Touch</span></Link>
</div>





            <Dropdown>
 <Dropdown.Toggle className="btn-nav btn-nav-search" onClick={toggleSearchDropdown} aria-label={searchDropdownOpen ? "Close search" : "Open search"}>
                {searchDropdownOpen ? <X /> : <Search />}
          <span>{searchDropdownOpen ? "Close" : "Search"}</span>
              </Dropdown.Toggle>


             <div className={getDropdownClass(searchDropdownOpen)}>

<div className="dropdown-inner">
                   <div className="container">

            <div className="row">
              <div className="col">

<div className="search-wrap">
<div className="small"><i className="bi bi-stars"></i> Powered by Enqbator AI</div>
<div className="input-wrap mb-3">
  <input type="text" className="form-control input-xl input-search" placeholder="Search Enqbator" aria-label="Search Enqbator" aria-describedby="button-addon2" ref={inputRef} />
  <button className="btn btn-primary btn-search" type="button" id="button-addon2" aria-label="search"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
</div>
<div className="pop-searches">Popular Searches  <Link href="#" className="btn btn-primary">Artifical Intelligence</Link><Link href="#" className="btn btn-primary">Healthcare</Link><Link href="#" className="btn btn-primary">Sitefinity</Link></div>
</div>

</div>
            </div>




          </div>

</div>
                </div>
            </Dropdown>




<Dropdown>
<Dropdown.Toggle className="btn-nav btn-nav-menu" onClick={toggleMenuDropdown} aria-label="menu">
  {/* <div className="hamburger-icon">
    <span className={menuDropdownOpen ? "line line1 open" : "line line1"}></span>
    <span className={menuDropdownOpen ? "line line2 open" : "line line2"}></span>
    <span className={menuDropdownOpen ? "line line3 open" : "line line3"}></span>
  </div> */}
{menuDropdownOpen ? <X /> :<div className="hamburger-icon">
    <span className={menuDropdownOpen ? "line line1 open" : "line line1"}></span>
    <span className={menuDropdownOpen ? "line line2 open" : "line line2"}></span>
    <span className={menuDropdownOpen ? "line line3 open" : "line line3"}></span>
  </div> }
 <span>{menuDropdownOpen ? "Close" : "Menu"}</span>
</Dropdown.Toggle>





                     <div className={getDropdownClass(menuDropdownOpen)}>
 <div className={`dropdown-inner ${activeBackground}`}>
                                      <div className="container">



            <div className="row gx-lg-5">
                <div className="col-lg-3">
                  <div id="nav-left-wrap">
                  <div id="nav-left">





   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bg-img="collapse5" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" onClick={handleClick}>
                 <div className="underline"><span>Case Studies</span></div>
                </button>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bg-img="collapse1" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1" onClick={handleClick}>
                 <div className="underline"><span>Services</span></div>
                </button>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bg-img="collapse2" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2" onClick={handleClick}>
             <div className="underline"><span>Technologies</span></div>
                </button>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bg-img="collapse3" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" onClick={handleClick}>
               <div className="underline"><span>Resources</span></div>
                </button>
<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bg-img="collapse4" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" onClick={handleClick}>
               <div className="underline"><span>About</span></div>
                </button>



                    </div>
                    </div>
              </div>
              <div className="col-lg-9">



<div id="menuAccordionWrap">
                    <div className="accordion" id="menuAccordion">



<div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Case Studies
                      </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#menuAccordion">
                          <div className="accordion-body">
    <div className="megamenu-content">

        <div className="menu-grid fade-in-seq">

<Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>View our Recent Work</span></span></div><SvgArrow /></Link><br /><p className="eyebrow text-white">View by Market</p><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Healthcare</span></span></div><SvgArrow /></Link><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Courts & Public Safety</span></span></div><SvgArrow /></Link><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Non-Profit</span></span></div><SvgArrow /></Link><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Museums</span></span></div><SvgArrow /></Link><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Financial</span></span></div><SvgArrow /></Link><Link href='#' className='btn-icon-txt'><div className='icon'><i className='bi bi-database-lock'></i></div><div className='txt'><span className='underline'><span>Education</span></span></div><SvgArrow /></Link>


</div>

<Card>
<Link href="#" className="card" data-work-id="1" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <Image src="https://picsum.photos/350/350?random=1" alt="overlay-image" className="card-img-top"  data-cursor="pointer2" width="350" height="350"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title 1</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>

  </div>
</Link>
</Card>

    </div>


                      </div>
                    </div>
                  </div>


                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        Services
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#menuAccordion">
                          <div className="accordion-body">

    <div className="megamenu-content">

        <div className="menu-grid fade-in-seq">

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Digital Strategy & Consulting</span></span>
</div>
<SvgArrow />
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Experience Design</span></span>
</div>
<SvgArrow />
</Link>




      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Web & Application Development</span></span>
</div>
<SvgArrow />
</Link>


      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Mobile Development</span></span>
</div>
<SvgArrow />
</Link>

      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>IT Support & Account Management</span></span>
</div>
<SvgArrow />
</Link>

      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Sitefinity Experts</span></span>
</div>
<SvgArrow />
</Link>

      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Hosting & Security</span></span>
</div>
<SvgArrow />
</Link>














</div>


<Card>
<Link href="#" className="card" data-work-id="1" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <Image src="https://picsum.photos/350/350?random=2" alt="overlay-image" className="card-img-top"  data-cursor="pointer2" width="350" height="350"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title 1</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>

  </div>
</Link>
</Card>

    </div>




                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Technologies
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#menuAccordion">
                          <div className="accordion-body">
    <div className="megamenu-content">






        <div className="menu-grid fade-in-seq">

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Sitefinity Expertise</span></span>
</div>
<SvgArrow />
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Wordpress</span></span>
</div>
<SvgArrow />
</Link>




      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>iOS</span></span>
</div>
<SvgArrow />
</Link>


      <Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Android</span></span>
</div>
<SvgArrow />
</Link>

</div>

<Card>
<Link href="#" className="card" data-work-id="1" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <Image src="https://picsum.photos/350/350?random=3" alt="overlay-image" className="card-img-top"  data-cursor="pointer2" width="350" height="350"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title 1</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>

  </div>
</Link>
</Card>
    </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Insights
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#menuAccordion">
                          <div className="accordion-body">


    <div className="megamenu-content">







        <div className="menu-grid fade-in-seq">

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Blog</span></span>
</div>
<SvgArrow />
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>ThinkTenq: Webinars</span></span>
</div>
<SvgArrow />
</Link>




<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Press Releases</span></span>
</div>
<SvgArrow />
</Link>


<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>White Papers</span></span>
</div>
<SvgArrow />
</Link>


<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Newsletters</span></span>
</div>
<SvgArrow />
</Link>




</div>

<Card>
<Link href="#" className="card" data-work-id="1" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <Image src="https://picsum.photos/350/350?random=4" alt="overlay-image" className="card-img-top"  data-cursor="pointer2" width="350" height="350"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title 1</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>

  </div>
</Link>
</Card>
    </div>




                      </div>
                    </div>
                      </div>


                          <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        About
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#menuAccordion">
                            <div className="accordion-body">


    <div className="megamenu-content">







        <div className="menu-grid fade-in-seq">

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Who we are</span></span>
</div>
<SvgArrow />
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Why we are different</span></span>
<SvgArrow />
</div>
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Careers</span></span>
<SvgArrow />
</div>
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>News & Press</span></span>
<SvgArrow />
</div>
</Link>

<Link href="/components/" className="btn-icon-txt">
<div className="icon"><i className="bi bi-database-lock"></i></div>
<div className="txt">
<span className="underline"><span>Contact us</span></span>
<SvgArrow />
</div>
</Link>



</div>



<Card>
<Link href="#" className="card" data-work-id="1" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <Image src="https://picsum.photos/350/350?random=1" alt="overlay-image" className="card-img-top"  data-cursor="pointer2" width="350" height="350"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title 1</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>

  </div>
</Link>
</Card>


    </div>



                      </div>
                    </div>
                      </div>



                </div>
</div>


              </div>
            </div>

          </div>
</div>
                </div>
        </Dropdown>
</div>
    </div>

    );
};

export default NavHeader;



