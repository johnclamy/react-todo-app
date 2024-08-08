import Main from "../components/layout/Main";
import hero from "../assets/imgs/hero.jpg";

const Home = () => {
  return (
    <Main>
      {/* hero section */}
      <section className="relative h-screen w-full">
        <img
          src={hero}
          alt="Background image of various takeaway meals"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Order your favourite food here!
          </h1>
          <p className="text-xl text-white text-center mt-4 mx-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            placeat? Sunt, nisi quo fugiat ipsa reiciendis quaerat id natus
            delectus, rem harum, quia nemo tempore minus blanditiis magni
            deserunt veritatis?
          </p>
        </div>
      </section>
    </Main>
  );
};

export default Home;
