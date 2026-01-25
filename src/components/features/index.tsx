const Feature = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-12 flex flex-col lg:flex-row justify-between items-start gap-8 px-4 py-6">
      <div className="w-full lg:w-[23%] px-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[#46A3581A] pb-6 lg:pb-0">
        <img
          src="https://greenshop-react-ts.vercel.app/images/f11.svg"
          alt="Garden Care"
        />
        <h3 className="font-bold text-lg mt-4 mb-1">Garden Care</h3>
        <p className="text-sm text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="w-full lg:w-[23%] px-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[#46A3581A] pb-6 lg:pb-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
          alt="Plant Renovation"
        />
        <h3 className="font-bold text-lg mt-4 mb-1">Plant Renovation</h3>
        <p className="text-sm text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="w-full lg:w-[23%] px-4 border-b-2 lg:border-b-0 lg:border-r-2 border-[#46A3581A] pb-6 lg:pb-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
          alt="Watering Garden"
        />
        <h3 className="font-bold text-lg mt-4 mb-1">Watering Garden</h3>
        <p className="text-sm text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="w-full lg:w-[31%] px-4">
        <h3 className="font-bold text-lg mb-3">
          Would you like to join newsletters?
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 mb-5"
        >
          <input
            type="email"
            required
            className="bg-white py-2 px-4 w-full sm:rounded-l rounded-md sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            placeholder="Enter your email address..."
          />
          <button
            type="submit"
            className="bg-[#46A358] hover:bg-[#3f9142] transition-colors text-white font-semibold py-2 px-5 sm:rounded-r rounded-md sm:rounded-l-none"
          >
            Join
          </button>
        </form>
        <p className="text-sm text-gray-500 leading-relaxed">
          We usually post offers and challenges in newsletter. We're your online houseplant destination. 
          We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};

export default Feature;
