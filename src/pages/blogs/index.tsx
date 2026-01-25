import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, MessageCircle, Heart } from "lucide-react";
import { Input } from "antd";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Feature from "../../components/features";

const { Search } = Input;

interface BlogType {
  _id: string;
  title: string;
  description: string;
  image: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  content: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const stripHtml = (html: string): string => html.replace(/<[^>]*>?/gm, "");
  const truncateText = (text: string, length: number = 100): string =>
    text.length > length ? text.substring(0, length) + "..." : text;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://beckend-n14-soqt.vercel.app/api/user/blog",
          {
            params: {
              access_token: "64bebc1e2c6d3f056a8c85b7",
              search: "",
            },
          }
        );

        const modifiedData = response.data.data.map((blog: BlogType) => ({
          ...blog,
          viewCount: (blog.viewCount || 0) + Math.floor(Math.random() * 20),
        }));

        setBlogs(modifiedData);
        setFilteredBlogs(modifiedData);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const onSearch = (value: string) => {
    const results = blogs.filter((blog) => {
      const titleMatch = blog.title?.toLowerCase().includes(value.toLowerCase());
      const descMatch = blog.description?.toLowerCase().includes(value.toLowerCase());
      return titleMatch || descMatch;
    });

    setFilteredBlogs(results);
  };

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9",
      alt: "blog_avatar_1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6",
      alt: "blog_avatar_2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9",
      alt: "blog_avatar_3",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7",
      alt: "blog_avatar_4",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701",
      alt: "blog_avatar_5",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />

      <div className="w-[90%] mx-auto py-8 px-4 mt-6 bg-[#f5f5f5] flex flex-wrap justify-center items-end gap-5 sm:gap-10 md:gap-16 rounded-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-auto object-contain transition-transform hover:scale-105 duration-300"
          />
        ))}
      </div>

      <div className="w-[90%] m-auto text-center py-12 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Monetize your content with{" "}
          <span className="text-[#46A358]">GreenShop</span>
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          GreenShop — a platform for buying and selling, publishing and
          monetizing all types of flowers: articles, notes, video, photos,
          podcasts or songs.
        </p>
        <button className="bg-[#46A358] hover:bg-green-600 transition text-white font-medium px-6 py-3 rounded-lg shadow">
          Join GreenShop
        </button>
      </div>

      <div className="my-6 max-w-[700px] mx-auto flex justify-center items-center">
        <Search
          placeholder="Kommentariyasi bor bloglarni izlang"
          enterButton={
            <button className="bg-[#46A358] text-white px-5 py-[11.5px] rounded-r-md">
              Qidirish
            </button>
          }
          size="large"
          onSearch={onSearch}
        />
      </div>

      <div className="w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {loading ? (
          <p>Yuklanmoqda...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            Hech qanday mos blog topilmadi. Iltimos, ro'yxatdan o'ting va izoh qoldiring!
          </p>
        ) : (
          filteredBlogs.map((blog) => {
            const shortText = truncateText(stripHtml(blog.content), 100);
            return (
              <div
                key={blog._id}
                className="border p-4 rounded-xl shadow hover:shadow-md transition bg-white flex flex-col justify-between h-full"
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2">{shortText}</p>
                  <p className="text-gray-600 text-sm line-clamp-4">{blog.description}</p>
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="mt-3 w-full h-40 object-cover rounded"
                    />
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm border-t pt-2">
                  <div className="flex items-center gap-1">
                    <Eye size={16} /> {blog.viewCount || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} /> {blog.commentCount || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={16} /> {blog.likeCount || 0}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Feature />
      <Footer />
    </div>
  );
};

export default Blogs;
