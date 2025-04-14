const HeroBanner = () => {
  return (
    <div
      className="w-full backdrop-blur-sm"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(52, 50, 229, 0.2) 0%, rgba(255, 253, 238, 0) 49.5%, rgba(52, 50, 229, 0.2) 100%),
          linear-gradient(0deg, #FFFDEE 0%, #FFFDEE 100%)
        `,
        backgroundColor: "#FFFDEE",
      }}
    >
      <div className="w-full flex justify-center">
        <div className="relative w-full">
          <div className="absolute inset-0 border-b border-black/20"></div>
          <div className="px-6 py-4 text-center font-bold font-black text-lg md:text-xl max-w-3xl mx-auto">
            <span className="t">We Are A FREE,</span>
            <span className="text-primary"> Volunteer-Driven</span>
            <span> & </span>
            <span className="text-primary">Donation-Powered</span>
            <span> Service.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
