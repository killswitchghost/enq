import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/layouts/Layout';

const HomePage = () => {
  const fadeinText =
    "<h2>We're a digital agency committed to building strong partnerships while delivering innovative & creative solutions.</h2>";
  const cardsData = [
    {
      id: 1,
      title: 'Clackamas Community College',
      description:
        'Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement',
      imageUrl: 'https://picsum.photos/480/480?random=1',
      meta: 'design, ux research, sitefinity',
      linkUrl: 'CaseStudy'
    },
    {
      id: 2,
      title: 'Sturgis Bank',
      description:
        'Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication',
      imageUrl: 'https://picsum.photos/480/480?random=2',
      meta: 'test, test',
      linkUrl: 'CaseStudy'
    },
    {
      id: 3,
      title: 'Sturgis Bank',
      description:
        'Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication',
      imageUrl: 'https://picsum.photos/480/480?random=2',
      meta: 'test, test',
      linkUrl: 'CaseStudy'
    }
  ];
  const prodData = [
    {
      id: 1,
      title: 'Clackamas Community College',
      description:
        'Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement',
      imageUrl: 'https://picsum.photos/773/435?random=1',
      meta: 'design, ux research, sitefinity',
      linkUrl: 'CaseStudy'
    }
  ];
  return (
    <Layout>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      [Layout.tsx]
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </Layout>
  );
};

export default HomePage;
