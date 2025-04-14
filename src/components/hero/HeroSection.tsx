import React from "react";
import HeroTextContent from "./HeroTextContent";
import HeroBanner from "./HeroBanner";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/e151/5e88/44b36be5ec139db8c9d4c40beee2a661?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a8BT60~JVbBjnp6dAimIIwRjg9kM6WCUikkGcZcr3a0GBktinGElO9MDOy~WX6ZznPc7Aq0N6RGTyB1d6sDgt7jTx0Dw1NTFzTa~SHKqzbiziFQHlr~R4pD8oBRXIb4uDXA-xOlAdD4X1q-8GlkcnKeWi-C7sam2dTORSSmbXfxQv6rvjW83VPLCPNjqDHjZbDQ9sFEjS0gPjcMt03Uvtbm17sllJdoruY6hiIHV5iB4pEW1Xa28fiA2G8t17bkIFdlMQYGOFcGJfQMKaeG7fxL~hw0EA58R7IY-LvTnXuikxpJfD5wWXCS-a1w4dgonntMJPGsdSysBHR2ooFChWw__')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <HeroTextContent />
        </div>

        <div className="w-full">
          <HeroBanner />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
