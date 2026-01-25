import { useEffect, useState } from "react";
import flw2 from "../../assets/images/flw2.png";

const headerTexts = [
  "LET'S LIVE IN A BETTER",
  "LET'S OBSERVE A BETTER",
  "LET'S MAKE A BETTER",
];

const headerImages = [
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
];

const headerButtons = ["Let's start", "Get credits", "Shop now"];

const Data = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="max-w-[90%] mx-auto mt-4 px-4 sm:px-6 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-10 bg-[#f5f5f5]/50 rounded-xl">
        <div className="w-full sm:max-w-[600px] text-center sm:text-left">
          <p className="text-[#3D3D3D] font-medium text-xs sm:text-sm tracking-widest uppercase">
            Welcome to GreenShop
          </p>
          <h1 className="text-[#3D3D3D] font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-tight uppercase mt-2 transition duration-700">
            {headerTexts[index]} <span className="text-[#46A358]">Planet</span>
          </h1>
          <p className="text-[#727272] text-sm sm:text-base leading-relaxed mt-4">
            We are an online plant shop offering a wide range of cheap and trendy plants. 
            Use our plants to create a unique Urban Jungle. Order your favorite plants!
          </p>
          <a href="#" className="inline-block mt-6">
            <button className="w-[140px] h-[42px] sm:h-[48px] rounded-md bg-[#46A358] hover:bg-[#389e4a] transition-colors text-white font-bold text-sm sm:text-base uppercase">
              {headerButtons[index]}
            </button>
          </a>
        </div>

        <div className="relative w-full max-w-[480px] aspect-[1/1] flex-shrink-0">
          <img
            src={headerImages[index]}
            alt="Main flower"
            className="w-full h-full object-contain transition duration-700"
          />
          <img
            src={flw2}
            alt="Decoration flower"
            className="absolute w-[80px] sm:w-[100px] lg:w-[130px] aspect-[1/1] top-[65%] left-[12%]"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6 mb-10 gap-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-8 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#46A358]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Data;
