import { Input } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@mui/material';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '../ResumeInfoContext';
import GlobalApi from '../GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Skills.css';

const Skills = () => {
  const [skillsList, setSkillsList] = useState([{ name: '', rating: 0 }]);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { resumeId } = useParams();

  useEffect(() => {
    if (resumeInfo?.skills && Array.isArray(resumeInfo.skills)) {
      setSkillsList(resumeInfo.skills);
    }
  }, []);

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);

  const handleChange = (index, name, value) => {
    const updatedList = [...skillsList];
    updatedList[index][name] = value;
    setSkillsList(updatedList);
  };

  const addNewSkill = () => {
    setSkillsList((prev) => [...prev, { name: '', rating: 0 }]);
  };

  const removeSkill = () => {
    if (skillsList.length > 1) {
      setSkillsList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = async () => {
    setLoading(true);
    const payload = {
      data: {
        skills: skillsList.map(({ name, rating }) => ({ name, rating })),
      },
    };

    try {
      await GlobalApi.UpdateResumeDetail(resumeId, payload);
      toast('Details updated!');
    } catch (error) {
      console.error('Save error:', error);
      toast('Server Error, Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Add your top professional key skills</p>

      <div className="skills-list">
        {skillsList.map((item, index) => (
          <div key={index} className="skill-card">
            <div>
              <label htmlFor={`skill-name-${index}`} className="skills-label">Skill Name</label>
              <Input
                id={`skill-name-${index}`}
                name="name"
                defaultValue={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`skill-rating-${index}`} className="skills-label">Rating</label>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                onChange={(v) => handleChange(index, 'rating', v)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="skills-controls">
        <div className="skills-buttons-left">
          <Button variant="outlined" onClick={addNewSkill}>
            + Add More Skill
          </Button>
          <Button variant="outlined" onClick={removeSkill}>
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave} variant="contained" color="primary">
          {loading ? <LoaderCircle className="spin-icon" /> : 'Save'}
        </Button>
      </div>
    </div>
  );
};

export default Skills;
