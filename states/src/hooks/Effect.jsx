import React, { useEffect } from "react";

export const Effect = () => {
  //what effect does
  useEffect(() => {
    document.addEventListener("click", handler);
    return () => {
      document.remove.addEventListener("click", handler);
    };
  }, []);

  useEffect(function initPlugin() {
    somePlugin.init();
    return () => {
      somePlugin.destroy();
    };
  }, []);

  return <div></div>;
};
