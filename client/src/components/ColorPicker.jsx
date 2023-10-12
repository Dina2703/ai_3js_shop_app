import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
import { useState } from "react";
export const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChangeComplete={(color) => (state.color = color.hex)}
      />
    </div>
  );
};
