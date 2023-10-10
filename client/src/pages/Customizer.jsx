import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  FilePicker,
  Tab,
  CustomBtn,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  //show tab content depending on the active activeTab
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker />;
      case "aipicker":
        return <AIPicker />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div>
            <motion.div
              key="custom"
              className="absolute top-0 left-0 z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center min-h-screen">
                <div className="editortabs-container tabs">
                  {EditorTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => {
                        setActiveEditorTab(tab.name);
                      }}
                    />
                  ))}
                  {generateTabContent()}
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomBtn
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {" "}
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
