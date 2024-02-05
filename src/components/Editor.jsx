import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Editor({ value, handleChange }) {
       return (
              <>
                     <AceEditor
                            height="500px"
                            value={value}
                            mode="html"
                            theme="monokai"
                            fontSize="16px"
                            highlightActiveLine={true}
                            setOptions={{
                                   enableLiveAutocompletion: true,
                                   showLineNumbers: true,
                                   tabSize: 2,
                            }}
                            onChange={(value) => {
                                   handleChange(value);
                            }}
                     />
              </>
       );
}
