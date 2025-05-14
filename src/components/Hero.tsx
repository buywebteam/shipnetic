import Button from "./Button";

function Hero() {
  return (
    <div className="bg-red-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 flex justify-center items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
            Powering Global Commerce with Smart Logistics and Transport
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl my-4 sm:my-6 text-center">
            From local deliveries to global freight, we manage all your
            logistics needs with precision and care—so you can keep your
            business running without missing a beat.{" "}
          </p>
          <div className="flex justify-center items-center">
            <a href="https://wa.me/1234567890">
              <Button label="Get Started" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
