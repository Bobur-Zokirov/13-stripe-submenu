import { useGlobalContext } from "../context";
import phone from "../assets/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrustructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            modi quaerat impedit. Fugit perspiciatis adipisci similique tempora
            aspernatur nostrum, ad quas ipsum, voluptatibus corporis laudantium.
          </p>
          <button className="btn">Start now</button>
        </article>

        <article className="hero-images">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
