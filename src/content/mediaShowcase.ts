import website2Vid from "@/assets/website 2.mp4";
import digitalGrowthPosterImg from "@/assets/Vedant Miniyar Digital Growth Poster.png";
import turmeric2Vid from "@/assets/turmeric 2.mp4";
import turmeric1Vid from "@/assets/Turmeric 1.mp4";
import loofah5Vid from "@/assets/loofah 5.mp4";
import keshthic112Img from "@/assets/Keshthic  (112).png";
import keshthic78Img from "@/assets/Keshthic  (78).png";
import keshthic44Img from "@/assets/Keshthic  (44).png";
import keshthic42Img from "@/assets/Keshthic  (42).png";
import keshthic38Img from "@/assets/Keshthic  (38).png";
import keshthic34Img from "@/assets/Keshthic  (34).png";
import keshthic30Img from "@/assets/Keshthic  (30).png";
import keshthic27Img from "@/assets/Keshthic  (27).png";
import video20secDVid from "@/assets/20sec video D.mp4";
import img7 from "@/assets/7.png";
import img5 from "@/assets/5.png";
import img2 from "@/assets/2.png";
import vid2_1 from "@/assets/2.1.mp4";
import vid1_1 from "@/assets/1.1.mp4";

export type MediaItem = {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  badge: string;
};

export const showcaseMedia: MediaItem[] = [
  {
    id: "website-2",
    title: "Website Design & Performance",
    type: "video",
    src: website2Vid,
    badge: "Website Video",
  },
  {
    id: "digital-growth-poster",
    title: "Digital Growth Strategy",
    type: "image",
    src: digitalGrowthPosterImg,
    badge: "Growth Poster",
  },
  {
    id: "turmeric-2",
    title: "Turmeric Brand Reel 2",
    type: "video",
    src: turmeric2Vid,
    badge: "Product Reel",
  },
  {
    id: "turmeric-1",
    title: "Turmeric Product Showcase 1",
    type: "video",
    src: turmeric1Vid,
    badge: "Product Video",
  },
  {
    id: "loofah-5",
    title: "Natural Loofah Creative",
    type: "video",
    src: loofah5Vid,
    badge: "Product Reel",
  },
  {
    id: "keshthic-112",
    title: "Keshthic Hair Care Creative",
    type: "image",
    src: keshthic112Img,
    badge: "Brand Graphic",
  },
  {
    id: "keshthic-78",
    title: "Keshthic Social Showcase",
    type: "image",
    src: keshthic78Img,
    badge: "Social Post",
  },
  {
    id: "keshthic-44",
    title: "Keshthic Benefits Carousel",
    type: "image",
    src: keshthic44Img,
    badge: "Carousel Ad",
  },
  {
    id: "keshthic-42",
    title: "Keshthic Product Visual",
    type: "image",
    src: keshthic42Img,
    badge: "Brand Visual",
  },
  {
    id: "keshthic-38",
    title: "Keshthic Ayurvedic Ad",
    type: "image",
    src: keshthic38Img,
    badge: "Campaign Ad",
  },
  {
    id: "keshthic-34",
    title: "Keshthic Hair Care Highlight",
    type: "image",
    src: keshthic34Img,
    badge: "Product Focus",
  },
  {
    id: "keshthic-30",
    title: "Keshthic Brand Story",
    type: "image",
    src: keshthic30Img,
    badge: "Brand Creative",
  },
  {
    id: "keshthic-27",
    title: "Keshthic Formula Poster",
    type: "image",
    src: keshthic27Img,
    badge: "Brand Poster",
  },
  {
    id: "video-20sec-d",
    title: "20s Dynamic Promotion Reel",
    type: "video",
    src: video20secDVid,
    badge: "Promo Video",
  },
  {
    id: "img-7",
    title: "Creative Visual #7",
    type: "image",
    src: img7,
    badge: "Social Creative",
  },
  {
    id: "img-5",
    title: "Brand Asset #5",
    type: "image",
    src: img5,
    badge: "Brand Graphic",
  },
  {
    id: "img-2",
    title: "Visual Story #2",
    type: "image",
    src: img2,
    badge: "Product Ad",
  },
  {
    id: "vid-2-1",
    title: "Interactive Reel 2.1",
    type: "video",
    src: vid2_1,
    badge: "Social Reel",
  },
  {
    id: "vid-1-1",
    title: "Campaign Reel 1.1",
    type: "video",
    src: vid1_1,
    badge: "Video Ad",
  },
];
