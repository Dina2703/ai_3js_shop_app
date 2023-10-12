import React from "react";
import CustomBtn from "./CustomBtn";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
      />
      <div className="flex flex-wrap gap-3">
        {" "}
        {generatingImg ? (
          <CustomBtn
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomBtn
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomBtn
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
