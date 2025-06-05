import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"; // Use Typography for text in MUI
import { toast } from "react-toastify";
import { executeCode } from "./constants/api"; // Update path if needed

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);

      setOutput(result.output?.split("\n") || ["No output."]);
      setIsError(!!result.stderr);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Unable to run code");  // react-toastify syntax for error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box width="100%" mt={{ xs: 6, md: 0 }}>
      <Box display={"flex"} flexDirection="row" alignItems="center" justifyContent="space-between">
        <Typography mb={2} fontSize="lg" fontWeight="bold">
        Output
      </Typography>
      <Button
        variant="outlined"
        color="success"
        mb={4}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </Button>
      </Box>
      <Box
        height="30vh"
        p={2}
        marginTop={2}
        overflow="auto"
        color={isError ? "error.main" : "#fff"}
        border={1}
        borderRadius={2}
        borderColor={isError ? "error.main" : "grey.700"}
        bgcolor="grey.800"
        sx={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
      >
        {output
          ? output.map((line, i) => (
              <Typography key={i} component="div">
                {line}
              </Typography>
            ))
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
