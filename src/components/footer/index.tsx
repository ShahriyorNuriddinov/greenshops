import logo2 from "../../assets/images/logo2.svg";

const Footer = () => {
  const socialIcons = [
    {
      alt: "facebook",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49",
    },
    {
      alt: "instagram",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5",
    },
    {
      alt: "twitter",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835",
    },
    {
      alt: "linkedin",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7",
    },
    {
      alt: "union",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f",
    },
  ];

  const payments = [
    {
      alt: "paypal",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca",
    },
    {
      alt: "mastercard",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a",
    },
    {
      alt: "visa",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2",
    },
    {
      alt: "amex",
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04",
    },
  ];

  return (
    <footer className="bg-white">
      <div className="bg-[#46A3581A] py-6 px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 container mx-auto">
        <img src={logo2} alt="logo" className="w-[140px]" />
        <div className="flex flex-col gap-2 text-sm text-[#3D3D3D] max-w-sm">
          <div className="flex gap-2 items-start">
            <span className="text-[#46A358] mt-[2px]">
              📍
            </span>
            70 West Buckingham Ave. Farmingdale, NY 11735
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[#46A358]">✉️</span>
            contact@greenshop.com
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[#46A358]">📞</span>
            +88 01911 717 490
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between gap-10 text-[#3D3D3D] text-sm">
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-base">My Account</h3>
          <p className="cursor-pointer hover:text-[#46A358]">My Account</p>
          <p className="cursor-pointer hover:text-[#46A358]">Address</p>
          <p className="cursor-pointer hover:text-[#46A358]">Wishlist</p>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-base">Categories</h3>
          <p className="cursor-pointer hover:text-[#46A358]">House Plants</p>
          <p className="cursor-pointer hover:text-[#46A358]">Potter Plants</p>
          <p className="cursor-pointer hover:text-[#46A358]">Seeds</p>
          <p className="cursor-pointer hover:text-[#46A358]">Small Plants</p>
          <p className="cursor-pointer hover:text-[#46A358]">Accessories</p>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-base">Social Media</h3>
          <div className="flex gap-3 mt-2">
            {socialIcons.map((item, idx) => (
              <div
                key={idx}
                className="w-8 h-8 border border-[#46A35833] flex items-center justify-center rounded-sm cursor-pointer hover:scale-105 transition-transform"
              >
                <img src={item.src} alt={item.alt} className="w-4 h-4" />
              </div>
            ))}
          </div>

          <h3 className="font-bold text-base mt-6">We Accept</h3>
          <div className="flex gap-3 mt-2">
            {payments.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="w-10 h-6 object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
