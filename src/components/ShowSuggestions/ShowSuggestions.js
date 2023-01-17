import React from "react";

const ShowSuggestions = (props) => {
  const { title, image } = props.suggestion;
  return (
    <div className="grid grid-cols-1 justify-items-center border-8 border-[#f80] m-2  rounded-xl bg-slate-100">
      <div className="">
        <img className="w-10 h-10" src={image} alt="" />
      </div>
      <div>
        <p className="text-[#025] font-mono text-lg font-normal max-[800px]:hidden" title={title}>
          {title.length > 20 ? title.slice(0, 20) + ".." : title}
        </p>
      </div>
    </div>
  );
};

export default ShowSuggestions;
