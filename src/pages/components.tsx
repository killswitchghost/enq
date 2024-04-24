import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/Layout';

import Eyebrow from '../components/shared/Eyebrow/Eyebrow';



import Section from '../components/layouts/Section/Section';
import Row from '../components/layouts/Row/Row';
import Column from '../components/layouts/Column/Column';

import Card from '../components/shared/Card/Card';
import HorizontalMenu from '../components/sections/HorizontalMenu/HorizontalMenu';
import SubNav from '../components/shared/SubNav';
import StyleGuide from '../components/sections/StyleGuide/StyleGuide';

const Components = () => {
  return (
    <Layout>

<Section className="py-5" id="section1">
<Row>
 <Column className="col-lg-6"> <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/784/784" className="img-fluid" width="784" height="784" alt="test" />
          </figure></Column>
 <Column className="col-lg-6 d-flex align-items-center"><div className="m-5">
<p className="eyebrow aos-init" data-aos="fade-up">architecto</p>
<h1 data-aos="fade-up" data-aos-delay="50">Architecto beatae vitae dicta sunt explicabo</h1>
<p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div></Column>
</Row>
</Section>

<Section className="py-5" id="section2">
<Row>
 <Column className="col-lg-6 order-lg-2"> <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/784/784" width="784" height="784" className="img-fluid" alt="test"/>
          </figure></Column>
 <Column className="col-lg-6  order-lg-1 d-flex align-items-center"><div className="m-5">
<p className="eyebrow aos-init" data-aos="fade-up">architecto</p>
<h1 data-aos="fade-up" data-aos-delay="50">Architecto beatae vitae dicta sunt explicabo</h1>
<p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div></Column>
</Row>
</Section>

{/* <HeroImgLeft />

<HeroImgLeft /> */}

<HorizontalMenu />
   <StyleGuide />
{/* <SubNav /> */}


<Section className="py-5" id="section3">
<Row>
 <Column className="col-lg-12">
<Eyebrow className="rule mb-5">About</Eyebrow>
<h2 className="mb-8">Who Are We?</h2>
</Column>
</Row>

<Row className="gx-5">


 <Column className="col-lg-3">
<div className="">
<div className="card blue">
<div className="card-padding">
asdfadf
</div>
</div>
</div>
</Column>


 <Column className="col-lg-9">
<div className="grid-container">
<Link href="#">
<Card>
 <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/376/545" width="376" height="545" className="img-fluid" alt="test"/>
          </figure>
<p className="underline"><span>sdfa</span></p>
</Card>
</Link>
<Link href="#">
<Card>
 <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/376/545" width="376" height="545" className="img-fluid" alt="test"/>
          </figure>
<p className="underline"><span>sdfa</span></p>
</Card>
</Link>
<Link href="#">
<Card>
 <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/376/545" width="376" height="545" className="img-fluid" alt="test"/>
          </figure>
<p className="underline"><span>sdfa</span></p>
</Card>
</Link>
<Link href="#">
<Card>
 <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/376/545" width="376" height="545" className="img-fluid" alt="test"/>
          </figure>
<p className="underline"><span>sdfa</span></p>
</Card>
</Link>
<Link href="#">
<Card>
 <figure className="card-img" data-aos="img-reveal">
<Image src="https://picsum.photos/seed/picsum/376/545" width="376" height="545" className="img-fluid" alt="test"/>
          </figure>
<p className="underline"><span>sdfa</span></p>
</Card>
</Link>

</div>
      </Column>


</Row>

</Section>

<Section className="py-5" id="section4">
<Row>
 <Column className="col-lg-6"> <div className="sticky-side">fasdf</div>

</Column>
 <Column className="col-lg-6">asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />asdfd<br />

</Column>
</Row>
</Section>



    </Layout>
  );
}

export default Components;
