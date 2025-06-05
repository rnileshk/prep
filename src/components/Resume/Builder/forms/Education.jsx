import { Button, Input, TextField } from '@mui/material';
import { ResumeInfoContext } from '../ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../GlobalApi';
import { toast } from 'react-toastify';
import './Education.css';

const Education = () => {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [educationalList, setEducationalList] = useState([]);

  useEffect(() => {
    if (resumeInfo?.education?.length > 0) {
      setEducationalList(resumeInfo.education);
    }
  }, [resumeInfo]);

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationalList,
    });
  }, [educationalList]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedList = [...educationalList];
    updatedList[index][name] = value;
    setEducationalList(updatedList);
  };

  const addNewEducation = () => {
    setEducationalList((prev) => [
      ...prev,
      {
        universityName: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const removeEducation = () => {
    if (educationalList.length > 1) {
      setEducationalList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data)
      .then(() => {
        toast('Details updated!');
      })
      .catch((error) => {
        console.error('Update failed:', error);
        toast('Server Error, Please try again!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <p className="education-subheading">Add your educational details</p>

      {educationalList.map((item, index) => (
        <div key={index} className="education-form">
          <div className="education-description">
            <label htmlFor={`universityName-${index}`} className="education-label">University Name</label>
            <Input
              id={`universityName-${index}`}
              name="universityName"
              value={item.universityName}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </div>

          <div>
            <label htmlFor={`degree-${index}`} className="education-label">Degree</label>
            <Input
              id={`degree-${index}`}
              name="degree"
              value={item.degree}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </div>

          <div>
            <label htmlFor={`major-${index}`} className="education-label">Major</label>
            <Input
              id={`major-${index}`}
              name="major"
              value={item.major}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </div>

          <div>
            <label htmlFor={`startDate-${index}`} className="education-label">Start Date</label>
            <Input
              type="date"
              id={`startDate-${index}`}
              name="startDate"
              value={item.startDate}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </div>

          <div>
            <label htmlFor={`endDate-${index}`} className="education-label">End Date</label>
            <Input
              type="date"
              id={`endDate-${index}`}
              name="endDate"
              value={item.endDate}
              onChange={(e) => handleChange(index, e)}
              fullWidth
            />
          </div>

          <div className="education-description">
            <label htmlFor={`description-${index}`} className="education-label">Description</label>
            <TextField
              id={`description-${index}`}
              name="description"
              value={item.description}
              onChange={(e) => handleChange(index, e)}
              multiline
              rows={3}
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
      ))}

      <div className="education-controls">
        <div className="education-buttons-left">
          <Button variant="outlined" onClick={addNewEducation}>
            + Add More Education
          </Button>
          <Button variant="outlined" onClick={removeEducation}>
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

export default Education;
