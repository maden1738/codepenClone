import React from "react";
import AceEditor from "react-ace";
import { FaHtml5 } from "react-icons/fa";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Editor({ value, mode, handleChange, name, icon }) {
     return (
          <div className="w-[33%]">
               <div className="w-[100%] h-[8%]">
                    <div className="bg-primary text-md py-2 px-4 rounded-md flex items-center gap-2 w-fit">
                         {icon}
                         <span className="text-white">{name}</span>
                    </div>
               </div>
               <AceEditor
                    width="100%"
                    height="92%"
                    value={value}
                    mode={mode}
                    theme="tomorrow_night"
                    fontSize="14px"
                    // highlightActiveLine={true}
                    wrapEnabled={true}
                    setOptions={{
                         enableLiveAutocompletion: true,
                         showLineNumbers: true,
                         tabSize: 2,
                         autoScrollEditorIntoView: true,
                    }}
                    onChange={(value) => {
                         handleChange(value);
                    }}
                    className="border-gray-500"
               />
          </div>
     );
}
