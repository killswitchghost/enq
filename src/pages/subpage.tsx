import Layout from '../components/layouts/Layout';
import Section from '../components/layouts/Section/Section';
import SubNav from '../components/shared/SubNav';

const SubPage = () => {
  return (
    <Layout>

   <SubNav />
<>
<section style={{ height: '100vh' }} id="section1">
section1
</section>
<section style={{ height: '100vh' }} id="section2">
section2
</section>
<Section className="py-5" id="section3">asdfd</Section>


</>
    </Layout>
  );
}

export default SubPage;
