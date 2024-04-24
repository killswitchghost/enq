// import React, { useState, useEffect } from 'react';
// import Sparkle from '../../utils/Sparkle';
// import GrowLine from '../shared/GrowLine/GrowLine';


import React, { useEffect, useState } from 'react';
import Sparkle from '../../utils/Sparkle';
import GrowLine from '../shared/GrowLine/GrowLine';



interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface PlaceholderData {
  accordionItems: AccordionItem[];
}

const HomeSolutions = () => {
  const [data, setData] = useState<PlaceholderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/homeSolutionsData.json');
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

  return (
    <section className="full-height py-8 blob purple-red right middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sticky-side">
              <div className="sparkles">
                {/* Sparkle components should be defined or imported */}
                <Sparkle className="large-star" size={20} />
                <Sparkle className="small-star" size={15} />
              </div>
              <GrowLine className="grad-vert-purple-sky" />
              <div className="box-side">
                <h3>Solutions</h3>
                <p>This is some placeholder content for this section.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">

            <div className="accordion" id="accordionSolutions">
              {data.accordionItems.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed underline"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionSolutions">
                    <div className="accordion-body">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
