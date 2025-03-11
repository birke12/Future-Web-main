import ArticleSection from "../components/articleSection/ArticleSection.jsx";
/* import Introduktion from "../components/introduction/Introduction"; */
import PageHeader from "../components/pageHeader/PageHeader";
import HologramImage from "../components/hologram/Hologram.jsx";



function Home() {
  return (
    <>
      <PageHeader
        headerType="home"
        title="Fremtidens Web Udvikling"
        /* headerImg={headerImg} */
      />

<HologramImage src="/assets/images/Holo3.png" /> 


      
      <ArticleSection />
    </>
  );
}

export default Home;
