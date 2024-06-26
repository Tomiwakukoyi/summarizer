import { logo } from "../assets";

const Hero = () => {
  return (
    <header className=" w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="summarizer logo"
          className=" w-28 object-contain"
        />

        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarizer, an open-source article summarizer
        that does exactly what its name is
      </h2>
    </header>
  );
};

export default Hero;
