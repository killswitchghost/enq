import React, { useState, useEffect } from 'react';
import Sparkle from '../../utils/Sparkle';
import FadeInText from '../shared/FadeInText/FadeInText';
import GrowLine from '../shared/GrowLine/GrowLine';
interface IntroItem {
  introId: number;
  content: string;
}

interface HeadingItem {
  headingId: number;
  content: string;
}

interface PlaceholderData {
  intro: IntroItem[];
  heading: HeadingItem[];
}

const HomeWelcome = () => {
  const [data, setData] = useState<PlaceholderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/largeHeadingData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: PlaceholderData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Could not fetch data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const introItem = data.intro[0];
  const headingItem = data.heading[0];

  return (
    <section className="py-8 blob red-yellow left middle">
      <div className="container">
        <div className="row py-8">
          <div className="col-lg-4">
            <div className="sticky-side">
              <div className="sparkles">
                <div className="sparkle sky"><Sparkle className="large-star" size={20} /></div>
                <div className="sparkle purple"><Sparkle className="small-star" size={15} /></div>
              </div>
<GrowLine className="grad-vert-lime-green" />
              <div className="box-side">
     <p className="h3">Who we are</p>


              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <FadeInText htmlContent={headingItem.content} />
<a href='#' className='btn-link my-5'><span>Learn More</span></a>
          </div>
        </div>

          <div className="row mt-8">
            <div className="col-lg-8 offset-lg-4"><p className="eyebrow">Partners we call family</p>

            </div>
          </div>
<div className="row">
<div className="marquee">
<div className="marquee-inner">
<span>
<p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p>
</span>
<span>
<p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p><p>Vector</p>
</span>
</div>
</div>
</div>



      </div>
    </section>
  );
};

export default HomeWelcome;
