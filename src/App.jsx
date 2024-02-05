import { useState } from "react";

import Editor from "./components/Editor";

function App() {
       const [html, setHtml] = useState("");
       const srcDoc = ` <html>
                      <body>${html}</body>
               </html>`;
       return (
              <>
                     <div className="grid grid-cols-3 gap-3">
                            <Editor value={html} handleChange={setHtml} />
                            <Editor value={html} handleChange={setHtml} />
                            <Editor value={html} handleChange={setHtml} />
                     </div>
                     <iframe srcDoc={srcDoc} frameborder="0"></iframe>
              </>
       );
}

export default App;
