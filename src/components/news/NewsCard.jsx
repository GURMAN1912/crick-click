import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NewsCard = ({ imgUrl, headline, description, date, author }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/news/id?=1");
      }}
      className="flex hover:cursor-pointer md:flex-row flex-col gap-10 text-gray-200"
    >
      <div className="object-cover max-w-[300px]">
        <img
          src={imgUrl}
          className="hover:scale-105 transition ease-in-out rounded-[28px]"
          alt=""
        />
      </div>
      <div className="max-w-[750px] flex gap-6 flex-col">
        <div className=" headings">
          <h1 className="font-bold text-xl">{headline}</h1>
        </div>
        <div className="description">
          <p className="text-lg font-thin">{description}</p>
        </div>
        <div className="credits flex font-extralight text-sm">
          <div className="date">
            <p>{date}</p>
          </div>
          <div className="writer">
            <p>&nbsp;{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
