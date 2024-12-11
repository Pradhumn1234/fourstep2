import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/Component/admin/AdminLayout";
import BlogDetailSeo from "@/Component/admin/Blog Detail/BlogDetailSeo";
import DetailsQuestion from "@/Component/admin/Blog Detail/DetailsQuestion";
import BlogDetailBanner from "@/Component/admin/Blog Detail/BlogDetailBanner";
import IndustryHeroSection from "@/Component/admin/Industry/IndustryHeroSection";
const postDataAccordingId = async (id) => {
  return await (await fetch(`/api/industry/${id}`)).json();
};
export default function CreateWebinar() {
  const router = useRouter();
  const { industry } = router?.query;
  const [blogData, setBlogData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");
  useEffect(() => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab3");
    } else if (activeTab === "Tab3") {
      setActiveTab("Tab4");
    }
  }, []);
  useEffect(() => {
    if (industry) {
      postDataAccordingId(industry).then((res) => {
        setBlogData(res?.data || null);
      });
    }
  }, [industry]);
  return (
    <AdminLayout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Post</p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-3 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Basic Information
          </button>
          <>
            <button
              onClick={() => setActiveTab("Tab2")}
              className={`${
                activeTab === "Tab2"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Blog Questions
            </button>
            <button
              onClick={() => setActiveTab("Tab3")}
              className={`${
                activeTab === "Tab3"
                  ? "border-b-2 scale-105 border-black text-black"
                  : "border-black text-slate-500"
              } px-3 py-1`}
            >
              Seo Field
            </button>
          </>
        </div>
      </div>
      <div className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}>
        <IndustryHeroSection setActiveTab={setActiveTab} blogData={blogData} />
      </div>

      <>
        <div className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}>
          <DetailsQuestion blogData={blogData} setActiveTab={setActiveTab} />
        </div>
        <div className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}>
          <BlogDetailSeo blogData={blogData} setActiveTab={setActiveTab} />
        </div> 
      </>
    </AdminLayout>
  );
}
