import React, { useEffect, useRef, useState } from 'react';

interface FadeInTextProps {
  htmlContent: string;
}

const FadeInText: React.FC<FadeInTextProps> = ({ htmlContent }) => {
  const [spans, setSpans] = useState<JSX.Element[]>([]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";


    const chars = Array.from(textContent);
    const spanElements = chars.map((char, index) => (
      <span key={index} style={{ opacity: 0 }}>
        {char}
      </span>
    ));
    setSpans(spanElements);
  }, [htmlContent]);

  useEffect(() => {
    const handleScroll = () => {
      const paragraphEl = paragraphRef.current;
      if (paragraphEl) {
        const spansEl = paragraphEl.childNodes as NodeListOf<HTMLSpanElement>;
        spansEl.forEach((span) => {      const rect = span.getBoundingClientRect();
      const top = rect.top - window.innerHeight * 0.50;
      let opacityValue = 1 - ((top * 0.01) + (rect.left * 0.001));
      opacityValue = Math.min(Math.max(opacityValue, 0.1), 1);
      span.style.opacity = opacityValue.toString();
    });
  }
};


window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);


return () => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
};
}, []);

return (
<h1 className="fadein-text display-2" ref={paragraphRef}>
{spans}
</h1>
);
};

export default FadeInText;
