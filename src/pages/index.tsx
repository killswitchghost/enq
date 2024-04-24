import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HomeWelcome from '../components/sections/HomeWelcome';

import HomeSolutions from '../components/sections/HomeSolutions';
import HomeInsights from '../components/sections/HomeInsights';
import HomeTestimonials from '../components/sections/HomeTestimonials';
import HeroFull from '../components/sections/HeroFull/HeroFull';
import CardsColumns from '../components/sections/CardsColumns/CardsColumns';
import StyleGuide from '../components/sections/StyleGuide/StyleGuide';
import CustomizeExp from '../components/sections/CustomizeExp';
import NextSteps from '../components/sections/NextSteps';
import Contacts from '../components/sections/Contacts/Contacts';
import BgImageGrow from '../components/sections/BgImageGrow';
import SubNav from '../components/shared/SubNav';
import HorizontalMenu from '../components/sections/HorizontalMenu/HorizontalMenu';
import ExpandBox from '../components/shared/ExpandBox/ExpandBox';

const HomePage = () => {
  return (
    <Layout>
        <HeroFull />
        <CustomizeExp />
   <HomeWelcome />

   <HomeSolutions />
      <CardsColumns />
   <HomeInsights />
   <HomeTestimonials />




   <BgImageGrow />

    {/* <HorizontalMenu /> */}
    {/* <ExpandBox /> */}
<NextSteps />

<Contacts />


    </Layout>

  );
}

export default HomePage;


