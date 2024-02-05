import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Editor from "./components/Editor";

function App() {
     console.log("rendered");
     const [html, setHtml] = useState("");
     const [css, setCss] = useState("");
     const [js, setJs] = useState("");
     const [srcDoc, setSrcDoc] = useState("");

     useEffect(() => {
          const timeout = setTimeout(() => {
               setSrcDoc(`<html>
                      <body>${html}</body>
                      <style>${css}</style>
                      <script>${js}</script>
               </html>`);
          }, 500);
          return () => clearTimeout(timeout);
     }, [html, css, js]);
     return (
          <div>
               <div className="flex justify-between bg-black h-[55vh]">
                    <Editor
                         value={html}
                         mode="html"
                         handleChange={setHtml}
                         name="HTML"
                         icon={<FaHtml5 className="text-red-500" />}
                    />
                    <Editor
                         value={css}
                         mode="css"
                         handleChange={setCss}
                         name="CSS"
                         icon={<FaCss3Alt className="text-blue-500" />}
                    />
                    <Editor
                         value={js}
                         mode="jsx"
                         handleChange={setJs}
                         name="JS"
                         icon={<IoLogoJavascript className="text-yellow-500" />}
                    />
               </div>
               <div className="h-[45vh]">
                    <iframe
                         srcDoc={srcDoc}
                         frameborder="0"
                         height="100%"
                         width="100%"
                         sandbox="allow-scripts"
                    />
               </div>
          </div>
     );
}

export default App;

//29 31 33
