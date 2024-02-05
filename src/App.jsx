import { useState } from "react";

import Editor from "./components/Editor";

function App() {
     const [html, setHtml] = useState("");
     const [css, setCss] = useState("");
     const [js, setJs] = useState("");
     const srcDoc = ` <html>
                      <body>${html}</body>
                      <style>${css}</style>
                      <script>${js}</script>
               </html>`;
     return (
          <div>
               <div className="flex justify-between bg-black h-[60vh]">
                    <Editor value={html} mode="html" handleChange={setHtml} />
                    <Editor value={css} mode="css" handleChange={setCss} />
                    <Editor value={js} mode="jsx" handleChange={setJs} />
               </div>
               <div className="h-[40vh]">
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
