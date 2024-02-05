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
              <>
                     <div className="flex gap-4 bg-black">
                            <Editor
                                   value={html}
                                   mode="html"
                                   handleChange={setHtml}
                            />
                            <Editor
                                   value={css}
                                   mode="css"
                                   handleChange={setCss}
                            />
                            <Editor
                                   value={js}
                                   mode="jsx"
                                   handleChange={setJs}
                            />
                     </div>
                     <iframe
                            srcDoc={srcDoc}
                            frameborder="0"
                            className="w-full"
                     ></iframe>
              </>
       );
}

export default App;
