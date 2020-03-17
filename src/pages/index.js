import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Realtors from '../components/Realtors';
import Features from '../components/Features';
import Story from '../components/Story';
import Homes from '../components/Homes';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => (
  <div className="container">
    <Sidebar />
    <Header />
    <Realtors />
    <Features />
    <Story />
    <Homes />
    <Gallery />
    <Footer />
  </div>
);

export default Home;
