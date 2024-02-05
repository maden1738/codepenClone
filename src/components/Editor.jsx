import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Editor({ value, mode, handleChange }) {
     return (
          <div className="w-[32%]">
               <AceEditor
                    width="100%"
                    height="100%"
                    value={value}
                    mode={mode}
                    theme="tomorrow_night"
                    fontSize="16px"
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
               />
          </div>
     );
}
