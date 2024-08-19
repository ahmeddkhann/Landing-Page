import React from "react";
import {
  Bot,
  Airplay,
  BoomBox,
  Cherry,
  Chrome,
  ClipboardPenLine,
} from "lucide-react";
const Features = () => {
  const text = [
    {
      id: 1,
      icon: <Bot />,
      title: "Drag-and-Drop Interface",
      paragraph:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface",
    },
    {
      id: 2,
      icon: <Airplay />,
      title: "Multi-Platform Compatibility",
      paragraph:
        "Build VR Applications that run seamlessly across multiple platforms, including mobile, desktop and VR headset.",
    },
    {
      id: 3,
      icon: <BoomBox />,
      title: "Bulit-In Templates",
      paragraph:
        "Jumpstart your VR projects with a variety of built-in templatesm for different types of application and environment",
    },
    {
      id: 4,
      icon: <Cherry />,
      title: "Real-Time Preview",
      paragraph:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface",
    },
    {
      id: 5,
      icon: <Chrome />,
      title: "Collaboration Tools",
      paragraph:
        "Build VR Applications that run seamlessly across multiple platforms, including mobile, desktop and VR headset.",
    },
    {
      id: 6,
      icon: <ClipboardPenLine />,
      title: "Analytics Dashboard",
      paragraph:
        "Jumpstart your VR projects with a variety of built-in templatesm for different types of application and environment",
    },
  ];
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[8oopx]">
      <div className="text-center">
        <span
          className="bg-neutral-900 text-orange-500 rounded-full 
                              h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Build
          <span
            className="bg-gradient-to-r from-orange-500 to-orange-800
                                 text-transparent bg-clip-text"
          >
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {text.map((features, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 
                                          justify-center items-center rounded-full"
              >
                {features.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{features.title}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {features.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
