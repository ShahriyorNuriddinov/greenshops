import React, { useState } from "react";
import { useCreateBlogMutation } from "../../hooks/useQueryAction";

const PostBlog = () => {
  const { mutate: postBlog, isPending } = useCreateBlogMutation();
  
  const [formData, setFormData] = useState({
    title: "",
    short_description: "", 
    content: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.short_description.trim() || !formData.content.trim()) {
      alert("Hamma majburiy maydonlarni to'ldiring!");
      return;
    }
    const payload = {
      title: formData.title,
      short_description: formData.short_description,
      content: `<p class="ql-align-justify">${formData.content}</p>`
    };

    postBlog(payload, {
      onSuccess: () => {
        setFormData({ title: "", short_description: "", content: "" });
      }
    });
  };

  const labelStyle = "block text-sm font-medium text-[#3D3D3D] mb-2";
  const inputStyle = "w-full border border-[#EAEAEA] rounded-md p-3 outline-none focus:border-[#46A358] transition-all";

  return (
    <div className="max-w-[800px] mx-auto p-10 bg-white shadow-sm  rounded-lg border border-[#EAEAEA]">
      <h2 className="text-2xl font-bold text-[#3D3D3D] mb-8 border-b pb-4">Post New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={labelStyle}>Blog Title *</label>
          <input
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Sarlavhani kiriting"
            className={inputStyle}
            type="text"
          />
        </div>
        <div>
          <label className={labelStyle}>Short Description *</label>
          <textarea
            required
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            placeholder="Qisqacha tavsif (Masalan: Ushbu maqolada o'simliklar parvarishi haqida gaplashamiz...)"
            className={`${inputStyle} h-[100px] resize-none`}
          ></textarea>
        </div>
        <div>
          <label className={labelStyle}>Full Content *</label>
          <textarea
            required
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Maqolaning to'liq matni..."
            className={`${inputStyle} h-[250px] resize-none`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#46A358] text-white font-bold py-3 rounded-md hover:bg-[#3b8a4a] transition-all disabled:bg-gray-300"
        >
          {isPending ? "Posting..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default PostBlog;