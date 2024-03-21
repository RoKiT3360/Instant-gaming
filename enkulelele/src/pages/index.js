import Header from "./components/header";
import DivMainContent from "./components/div-main-content";
import FooterFooterContainer from "./components/footer-footer-container";

const BodyActGiveaway = () => {
  return (
    <div className="w-full relative bg-zinc-900 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border gap-[107px] mix-blend-normal tracking-[normal] mq750:gap-[27px_107px] mq1050:gap-[53px_107px]">
      <Header />
      <img
        className="w-[150px] h-10 absolute !m-[0] top-[-307px] left-[885px] object-cover mix-blend-normal"
        alt=""
        src="/link-logoig@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border relative max-w-full">
        <img
          className="h-[27px] w-[27px] absolute !m-[0] top-[171.5px] right-[938.4px]"
          loading="lazy"
          alt=""
        />
        <img
          className="h-[50px] w-[25px] absolute !m-[0] top-[160px] left-[924px] object-cover mix-blend-normal"
          loading="lazy"
          alt=""
          src="/div-cartapp@2x.png"
        />
        <DivMainContent />
      </section>
      <FooterFooterContainer />
    </div>
  );
};

export default BodyActGiveaway;
