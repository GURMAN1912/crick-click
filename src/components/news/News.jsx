import React from "react";
import NewsCard from "./NewsCard";
import img1 from "../../assets/baller.png";
import img2 from "../../assets/pitch.png";
import img3 from "../../assets/tahir.png";
import img4 from "../../assets/sai.png";
import img5 from "../../assets/gardener.png";
import { motion } from "framer-motion";

const News = () => {
  const newsDetails = [
    {
      imgUrl: img1,
      headline:
        "Asia's specialist Ajaz Patel says limited opportunities have made him hunger",
      description:
        "The left arm spinner is keen to make the most of his opportunities in the subcontinent",
      date: "22-Sep-2024 • 1hr ago • ",
      author: "Andrew Fidel Fernando",
    },
    {
      imgUrl: img2,
      headline: "The Hundred 2024: Trent Rockets beat Southern Brave",
      description:
        "Trent Rockets beat Southern Brave by 13 runs in the final of The Hundred 2024 at Lord's",
      date: "22-Sep-2024 • 1hr ago • ",
      author: "John Stern",
    },
    {
      imgUrl: img3,
      headline: "Tahir, the oldest player in the IPL, is still going strong",
      description:
        "Imran Tahir, the oldest player in the IPL, is still going strong and is a vital cog in the Chennai Super Kings' wheel",
      date: "22-Sep-2024 • 1hr ago • ",
      author: "Deviyaran Prabhu",
    },
    {
      imgUrl: img4,
      headline:
        "Sai Sudharshan: The left-arm spinner who is making waves in the IPL",
      description:
        "Sai Sudharshan, the left-arm spinner from Tamil Nadu, is making waves in the IPL with his accurate bowling and subtle variations",
      date: "22-Sep-2024 • 1hr ago • ",
      author: "Shashank Kishore",
    },
    {
      imgUrl: img5,
      headline: "Gardener seals series win after Kerr puts Australia in a spin",
      description:
        "Australia survived a scare from New Zealand to win the third ODI by 21 runs and seal the series 2-1",
      date: "22-Sep-2024 • 1hr ago • ",
      author: "Alex Malcolm",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-black flex justify-center items-center h-full mt-[70px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mt-10 mb-10 bg-[#1b1b1b] rounded-[28px]">
        <div className="title p-4">Latest News :</div>
        <motion.div
          className="mt-10 flex flex-col px-10 py-10 gap-10"
          variants={containerVariants}
        >
          {newsDetails.map((news, index) => (
            <motion.div key={index} variants={cardVariants}>
              <NewsCard
                imgUrl={news.imgUrl}
                headline={news.headline}
                description={news.description}
                date={news.date}
                author={news.author}
              />
              {index < newsDetails.length - 1 && (
                <hr className="text-white mt-10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default News;
