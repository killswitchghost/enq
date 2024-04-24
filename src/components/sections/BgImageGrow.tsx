import React, { useEffect, useState } from 'react';
import GrowLine from '../shared/GrowLine/GrowLine';



interface PageSection {
  pageId: number;
  title: string;
  content: string;
}

interface BgImageGrowData {
  page: PageSection[];
}

const BgImageGrow: React.FC = () => {
 const [bgImageGrowData, setNextStepsData] = useState<BgImageGrowData>({ page: [] });

  const handleScroll = () => {
    const scaleDivs = document.querySelectorAll('.width-scroll');

    scaleDivs.forEach((scaleDiv) => {
      const windowHeight = window.innerHeight;
      const divPosition = scaleDiv.getBoundingClientRect();
      const percentageVisible = (windowHeight - divPosition.top) / windowHeight;
      const newWidth = Math.min(percentageVisible * 100, 100); // Width in percentage
      const opacityValue = Math.min(percentageVisible, 1);

      (scaleDiv as HTMLElement).style.width = `${newWidth}%`;
      (scaleDiv as HTMLElement).style.opacity = `${opacityValue}`;
    });
 };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data/bgImageGrow.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: BgImageGrowData = await response.json();
        setNextStepsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>

{/* <GrowLine className="grad-vert-purple-sky" /> */}

      {bgImageGrowData.page.map(({ pageId, title, content }) => (
       <div key={pageId} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
    </div>
  );
}

export default BgImageGrow;
