import React from "react";
import img from "../../assets/author.png";
import img2 from "../../assets/gardener.png";
import { motion } from "framer-motion";
const NewsDetailed = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="bg-black flex justify-center  h-full mt-[70px]"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={containerVariants}
        className="mt-10 mb-10 px-10  bg-[#1b1b1b] w-2/3  rounded-[28px]"
      >
        <div className="">
          <div className="!text-green-400 !text-[18px] px-10 py-10 title">
            Report
          </div>
          <div className="heading text-gray-300">
            <h1 className="font-bold text-2xl mb-3">
              Gardner seals series win after Kerr puts Australia in a spin
            </h1>
            <p className="font-extralight font-xl mb-4">
              Australia survived a collapse of 7 for 28 that saw them bowled out
              for 142, with Kerr bagging four wickets
            </p>
            <div className="author flex gap-4 items-center">
              <img src={img} className="rounded-full h-8 w-8" alt="" />
              <div className="text-sm">
                <p className="text-gray-300">Alex Malcolm</p>
                <p className="text-gray-300">22-Sep-2024 • 1hr ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <img
            src={img2}
            className="hover:scale-105 transition ease-in-out duration-200 rounded-[28px] h-50 object-cover mt-10"
            alt=""
          />
        </div>
        <div className="mb-10 pb-10">
          <p className="text-gray-300 text-md">
            <span className="font-bold">
              Australia 142 (Healy 38, Perry 34, Kerr 4-20) beat New Zealand 113
              for 7 (Bates 34, Gardner 3-16) by 29 runs
            </span>
            <br />
            Ashleigh Gardner made a successful return from a concussion scare to
            claim three wickets and help Australia claim an untidy and
            unconvincing series win over New Zealand after a stunning collapse
            with the bat in the second T20I in Mackay. Australia lost 7 for 28
            to be bowled out for 142 having won the toss and elected to bat.
            <br />
            <br />
            New Zealand legspinner Amelia Kerr put the world champions in a
            spin, claiming a career-best 4 for 20 as the home side relinquished
            a commanding position that had been set up by captain Alyssa Healy
            to be bowled out for just the second time in their last 55 T20Is.
            Healy made 38 off 25, which was the standout innings of the match on
            a surface that batters found difficult despite it looking like it
            would offer plenty of runs. Ellyse Perry compiled a scratchy 34 from
            33 that would prove important but her dismissal to a bizarre run-out
            started Australia's slide.
            <br />
            <br />
            New Zealand's chase began cautiously and they paid the price as
            Australia's bowlers squeezed. Suzie Bates made another start,
            scoring a run-a-ball 34, but could not kick on after guiding her
            side to 34 without loss in the powerplay. Gardner and Annabel
            Sutherland went to work taking 4 for 34 between them off eight overs
            in the middle and death phases to close out the game despite some
            shoddy fielding from Australia.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsDetailed;
