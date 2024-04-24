// import React, { useState, useEffect } from 'react';
// import Sparkle from '../../utils/Sparkle';
// import GrowLine from '../shared/GrowLine/GrowLine';


import React, { useEffect, useState } from 'react';
import Sparkle from '../../utils/Sparkle';
import GrowLine from '../shared/GrowLine/GrowLine';
import Section from '../layouts/Section/Section';
import Accordion from '../shared/Accordion/Accordion';


const HomeSolutions = () => {




  return (

    <Section className="contacts blob red-purple top right">
<div className="container">
<div className="row">
       <div className="col-lg-4">
                        <div className="sticky-side">
                            <div className="sparkles">
                                <div className="sparkle sky"> <Sparkle className="large-star" size={20} /></div>
                                <div className="sparkle purple"> <Sparkle className="small-star" size={15} /></div>
                            </div>
<GrowLine className="grad-vert-lime-green" />
                            <div className="box-side">
     <p className="h3">What we do</p>
<p>This is some placeholder content for this section.</p>
                            </div>
                        </div>
                    </div>

<div className="col-lg-8">
<Accordion url="/data/homeSolutionsData.json" />
</div>


</div>
</div>
    </Section>




  );
};

export default HomeSolutions;
