import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Editor from "./components/Editor";

function App() {
     const savedCode = JSON.parse(localStorage.getItem("code"));
     const [code, setCode] = useState({
          html: "" || savedCode.html,
          css: "" || savedCode.css,
          js: "" || savedCode.js,
     });

     const [srcDoc, setSrcDoc] = useState("");

     useEffect(() => {
          const timeout = setTimeout(() => {
               setSrcDoc(`<html>
                      <body>${code.html}</body>
                      <style>${code.css}</style>
                      <script>${code.js}</script>
               </html>`);
               localStorage.setItem("code", JSON.stringify(code));
          }, 500);

          return () => clearTimeout(timeout);
     }, [code]);

     return (
          <>
               <div className="flex justify-between bg-black h-[50vh]">
                    <Editor
                         value={code.html}
                         mode="html"
                         handleChange={setCode}
                         name="html"
                         icon={<FaHtml5 className="text-red-500" />}
                    />
                    <Editor
                         value={code.css}
                         mode="css"
                         handleChange={setCode}
                         name="css"
                         icon={<FaCss3Alt className="text-blue-500" />}
                    />
                    <Editor
                         value={code.js}
                         mode="jsx"
                         handleChange={setCode}
                         name="js"
                         icon={<IoLogoJavascript className="text-yellow-500" />}
                    />
               </div>
               <div className="h-[50vh]">
                    <iframe
                         srcDoc={srcDoc}
                         frameborder="0"
                         height="100%"
                         width="100%"
                         sandbox="allow-scripts"
                    />
               </div>
          </>
     );
}

export default App;

//29 31 33
