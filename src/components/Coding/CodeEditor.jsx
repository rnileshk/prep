import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants/index";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (newLanguage) => {
    setLanguage(newLanguage);
    setValue(CODE_SNIPPETS[newLanguage] || "");
  };

  return (
    <Box>
      <Box className="code-editor">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor 
          options={{ minimap: { enabled: false } }}
          height="65vh"
          theme="vs-dark"
          language={language}
          value={value}
          onMount={onMount}
          onChange={(v) => setValue(v || "")} // handle null or undefined onChange
        />
      </Box>
      <Box flex={1} marginTop={2}>
        <Output editorRef={editorRef} language={language} />
      </Box>
    </Box>
  );
};

export default CodeEditor;
