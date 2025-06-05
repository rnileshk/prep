import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ResumeInfoContext } from '../ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from '../GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { AIChatSession } from '../AIModal';
import './Summery.css'; // ⬅️ Import the separate CSS file

const prompt = "Job Title: {jobTitle}. Based on this job title, generate a list of summary statements for three experience levels: Senior, Mid Level, and Fresher. Each summary should be 3–4 lines. Return an array of objects in JSON format with 'summary' and 'experience_level' fields.";

const Summery = ({ enabledNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiSummaryList, setAiSummaryList] = useState([]);
  const { resumeId } = useParams();

  useEffect(() => {
    if (summary) {
      setResumeInfo(prev => ({ ...prev, summery: summary }));
    }
  }, [summary]);

  useEffect(() => {
    if (resumeInfo?.summery) {
      setSummary(resumeInfo.summery);
    }
  }, [resumeInfo]);

  const generateSummaryFromAI = async () => {
    setLoading(true);
    try {
      const promptWithTitle = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || '');
      const result = await AIChatSession.sendMessage(promptWithTitle);
      const responseText = await result.response.text();
      const parsed = JSON.parse(responseText);
      setAiSummaryList(parsed);
    } catch (error) {
      console.error('AI Summary Error:', error);
      toast('Failed to generate summaries');
    } finally {
      setLoading(false);
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { data: { summery: summary } };
      await GlobalApi.UpdateResumeDetail(resumeId, data);
      toast('Details updated');
      enabledNext(true);
    } catch (error) {
      console.error('Save error:', error);
      toast('Server error. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-container">
      <h2 className="summary-heading">Summary</h2>
      <p className="summary-subtext">Add a professional summary for your job title.</p>

      <form className="summary-form" onSubmit={onSave}>
        <div className="summary-label-container">
          <label className="summary-label">Summary</label>
          <Button
            variant="outlined"
            type="button"
            size="small"
            onClick={generateSummaryFromAI}
            className="ai-button"
          >
            <Brain className="h-4 w-4" />
            Generate from AI
          </Button>
        </div>

        <TextField
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="summary-textarea"
        />

        <div className="summary-save-button">
          <Button type="submit" disabled={loading} variant="contained" color="primary">
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </form>

      {aiSummaryList?.length > 0 && (
        <div className="summary-suggestions">
          <h2 className="summary-heading mb-3">Suggestions</h2>
          {aiSummaryList.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummary(item?.summary)}
              className="summary-suggestion-box"
            >
              <h3 className="suggestion-title">Level: {item?.experience_level}</h3>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summery;
