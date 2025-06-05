import { Button, Input } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '../ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from '../GlobalApi';
import { toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';
import './Experience.css'; // ⬅️ Import your custom styles

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resumeInfo?.Experience?.length > 0) {
      setExperienceList(resumeInfo.Experience);
    }
  }, []);

  const handleChange = (index, event) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummery: '',
      },
    ]);
  };

  const removeExperience = () => {
    setExperienceList((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      Experience: experienceList,
    });
  }, [experienceList]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        Experience: experienceList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then(() => {
        toast('Details updated!');
        setLoading(false);
      })
      .catch((error) => {
        console.error('Update failed', error);
        setLoading(false);
      });
  };

  return (
    <div className="experience-container">
      <h2 className="experience-heading">Professional Experience</h2>
      <p className="experience-subheading">Add your previous job experience</p>

      <div>
        {experienceList.map((item, index) => (
          <div key={index} className="experience-form">
            <div>
              <label htmlFor={`title-${index}`} className="experience-label">Position title</label>
              <Input
                id={`title-${index}`}
                name="title"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.title}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`companyName-${index}`} className="experience-label">Company Name</label>
              <Input
                id={`companyName-${index}`}
                name="companyName"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.companyName}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`city-${index}`} className="experience-label">City</label>
              <Input
                id={`city-${index}`}
                name="city"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.city}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`state-${index}`} className="experience-label">State</label>
              <Input
                id={`state-${index}`}
                name="state"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.state}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`startDate-${index}`} className="experience-label">Start Date</label>
              <Input
                type="date"
                id={`startDate-${index}`}
                name="startDate"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.startDate}
                fullWidth
              />
            </div>
            <div>
              <label htmlFor={`endDate-${index}`} className="experience-label">End Date</label>
              <Input
                type="date"
                id={`endDate-${index}`}
                name="endDate"
                onChange={(e) => handleChange(index, e)}
                defaultValue={item?.endDate}
                fullWidth
              />
            </div>
            <div className="experience-summary-editor">
              <label htmlFor={`workSummery-${index}`} className="experience-label">Work Summary</label>
              <RichTextEditor
                id={`workSummery-${index}`}
                index={index}
                defaultValue={item?.workSummery}
                onRichTextEditorChange={(e) => handleRichTextEditor(e, 'workSummery', index)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="experience-controls">
        <div className="experience-buttons-left">
          <Button variant="outlined" onClick={addNewExperience} className="text-primary">
            + Add More Experience
          </Button>
          <Button variant="outlined" onClick={removeExperience} className="text-primary">
            - Remove
          </Button>
        </div>
        <Button variant="contained" onClick={onSave} disabled={loading}>
          {loading ? <LoaderCircle className="spin-icon" /> : 'Save'}
        </Button>
      </div>
    </div>
  );
};

export default Experience;
