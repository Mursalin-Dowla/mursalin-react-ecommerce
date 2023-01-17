import React from "react";

const ShowSuggestions = (props) => {
  const { title, image } = props.suggestion;
  return (
    <div className="grid grid-cols-1 justify-items-center  m-2  rounded-xl bg-slate-100 shadow-xl animate-bounce">
      <div className="">
        <img className="w-10 h-10" src={image} alt="" />
      </div>
      <div>
        <p className="text-[#025] font-mono text-lg font-normal max-[800px]:hidden tracking-tighter" title={title}>
          {title.length > 20 ? title.slice(0, 20) + ".." : title}
        </p>
      </div>
    </div>
  );
};

export default ShowSuggestions;
