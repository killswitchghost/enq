import React from 'react';
import Section from '../../layouts/Section/Section';
import './_Contacts.scss';

const Contacts = () => {
  const rowMarkup = `<div class="row">
<div class="col-md-3"><a href="#" class="card card-contact" data-cursor="pointer2"><div class="card-title"><h4 class="underline" data-cursor="pointer2"><span>Got a project
in mind, Let’s talk</span></h4></div></a></div>
<div class="col-md-3"><a href="#" class="card card-contact" data-cursor="pointer2"><div class="card-title"><h4 class="underline" data-cursor="pointer2"><span>General
Inquiries</span></h4></div></a></div>
<div class="col-md-3"><a href="#" class="card card-contact" data-cursor="pointer2"><div class="card-title"><h4 class="underline" data-cursor="pointer2"><span>Career Opportunities</span></h4></div></a></div>
<div class="col-md-3"><a href="#" class="card card-contact" data-cursor="pointer2"><div class="card-title"><h4 class="underline" data-cursor="pointer2"><span>Sign up for
our newsletter</span></h4></div></a></div>
</div>`;

  return (
    <Section className="contacts blob red-yellow top center">
      <div dangerouslySetInnerHTML={{ __html: rowMarkup }} className="container"/>
    </Section>
  );
};

export default Contacts;