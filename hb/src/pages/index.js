import About from '@/components/About';
import AddToCartSection from '@/components/AddToCartSection';
import Visuals from '@/components/Visuals';
import Configurations from '@/components/Configurations';
import Product from '@/components/Product';
import Comment from '@/components/Comment';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <div className="w-screen h-auto">
        <div className="w-screen h-[10vh]"></div>
        <Header />
        <AddToCartSection />
        <About />
        <Visuals />
        <Configurations />
        <Product />
        <Comment />
      </div>
    </>
  );
}