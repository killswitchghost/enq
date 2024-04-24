import React from 'react';
import useFetch, { ContentResponse } from '../../shared/FetchData/FetchData';
import Section from '../../layouts/Section/Section';
import Container from '../../layouts/Container/Container';
import './_StyleGuide.scss';


const StyleGuide = () => {
  const { data: contentResponse, loading, error } = useFetch<ContentResponse>('/data/styleGuide.json');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const content = contentResponse?.Items[0];

  return (
<>
      <Section> <div className="container" dangerouslySetInnerHTML={{ __html: content?.Content || '' }} />

</Section>
</>
  );
};

export default StyleGuide;