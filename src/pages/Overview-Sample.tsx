import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/layouts/Layout';

const HomePage = () => {
  const contentBlock =
    "<section class='section-py'><div class='container'><div class='row'><div class='col-lg-12'><h1>Home Page</h1><p>This is the home page content</p></div></div></div></section><section class='section-py'><div class='container'><div class='row'><div class='col-lg-12'><h1>Home Page</h1><p>This is the home page content</p></div></div></div></section>";

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: contentBlock }} />
    </Layout>
  );
};

export default HomePage;
