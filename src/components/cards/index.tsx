import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";

const cardData = [
  {
    img: card1,
    title: "Cactus & Succulent Care Tips",
    desc: "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    img: card2,
    title: "Top 10 Succulents for Your Home",
    desc: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    img: card3,
    title: "Cactus & Succulent Care Tips",
    desc: "Cacti and succulents thrive in containers and because most are..",
  },
  {
    img: card4,
    title: "Best Houseplants Room by Room",
    desc: "The benefits of houseplants are endless. In addition to..",
  },
];

const Cards = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <div className="relative max-w-[90%] mx-auto py-16 text-center">
      {showAlert && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#46A358] text-white px-6 py-3 rounded-md shadow-md z-50">
          Added to your shopping cart!
        </div>
      )}

      <h1 className="text-[#3D3D3D] font-bold text-2xl sm:text-3xl mb-2">
        Our Blog Posts
      </h1>
      <p className="text-[#727272] text-sm sm:text-base mb-10">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] bg-white shadow-sm hover:shadow-md transition-shadow rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="flex flex-col gap-2 text-left p-4 bg-[#FBFBFB]">
              <span className="text-[#46A358] text-sm font-medium">
                September {12 + index} | Read in {index + 2} minutes
              </span>
              <h3 className="text-[#3D3D3D] font-bold text-lg leading-6">
                {item.title}
              </h3>
              <p className="text-sm text-[#3D3D3D]">{item.desc}</p>

              <button
                onClick={handleClick}
                className="flex gap-2 items-center text-[#3D3D3D] font-medium text-sm hover:text-[#46A358] transition-colors"
              >
                Add to Cart <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
