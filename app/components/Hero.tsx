"user client";
import MobileMenu from "./MobileMenu";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background video */}
      <video
        src="/csdesign.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-center text-4xl md:text-6xl w-50 md:w-100 font-mar font-medium">
          Design <i>and</i> Architecture
        </h1>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Hero;
