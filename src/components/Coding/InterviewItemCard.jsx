import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

function InterviewItemCard({ interview }) {
  const navigate = useNavigate();

  const onStart = () => {
    navigate(`/coding/${interview?.mockId}`);
  };

  const onFeedback = () => {
    navigate(`/interview/${interview?.mockId}/feedback`);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2, backgroundColor: "#f7fafc"}}>
      <Typography variant="h6" fontWeight="bold" color="primary">
        Language: {interview?.launguage}
      </Typography>
      <Typography variant="body2" fontWeight="bold" color="text.secondary">
        Number of Questions: {interview?.number}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created At: {new Date(interview?.createdAt).toLocaleString()}
      </Typography>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="outlined" onClick={onFeedback}>
          Feedback
        </Button>
        <Button variant="contained" onClick={onStart}>
          Start
        </Button>
      </Stack>
    </Paper>
  );
}

export default InterviewItemCard;
