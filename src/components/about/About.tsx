import Styles from "./about.module.css";

const About = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>About Artyfy</h2>
      <section className={Styles.textContainer}>
        <p>
          Artyfy is all about sharing your art and creations, your love and
          passion. We love to help you show and promote your art to the world
          and in return all we ask is NO PICS OF SUNSETS YOUR DAY AT THE GYM OR
          YOUR FAMILY, for that you have facebook and instagram. <br /> <br /> •
          Evrything thats made by you or your assembly of people is welcomed to
          be uplloaded. <br /> <br />• THIS IS NOT WELCOME HERE, personal pics,
          like your new house, your car, your kids, your fit body, or your
          perfect life.
          <br /> <br />• You will get banned straight away, with no trial if you
          upload anything that promote hate in any direction. With that said i
          know that art have to invoke feelings, but im sure you know what im
          talking about.
          <br /> <br />• We love to see you sell your art at Artyfy, and we know
          that life as an artist can be very hard and we love to help you. But
          we dont take responisbility for shiping or that the deal goes thru,
          that is entirely up to the buyer and seller.
          <br /> <br />• If you sell your art thru Artfy we love to get a smal
          donation, we dont earn anything on this page, but pay for servers and
          maintenance, a donation can help us keep running this page and help us
          all share our art.
        </p>
        <p className={Styles.cursivText}>
          <br /> <br />
          Live Laugh nad create
          <br /> <br /> / The Artyfy crew
        </p>
      </section>
    </div>
  );
};

export default About;
