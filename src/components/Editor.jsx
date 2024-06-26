import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Editor({ value, mode, handleChange, name, icon }) {
     function handleClick() {
          handleChange((prev) => ({ ...prev, [name]: "" }));
     }

     return (
          <div className="w-[33%]">
               <div className="w-[100%] flex justify-between">
                    <div className="bg-primary text-md py-2 px-4 rounded-t-lg flex items-center gap-2 w-fit">
                         {icon}
                         <span className="text-white uppercase">{name}</span>
                    </div>
                    <button
                         type="button"
                         className="text-white mr-2"
                         onClick={handleClick}
                    >
                         Clear
                    </button>
               </div>
               <AceEditor
                    width="100%"
                    height="89%"
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
                         handleChange((prev) => ({ ...prev, [name]: value }));
                    }}
                    className="border-gray-500"
               />
          </div>
     );
}
