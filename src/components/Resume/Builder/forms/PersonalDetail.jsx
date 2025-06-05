import { Button, Input } from '@mui/material';
import { ResumeInfoContext } from '../ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import GlobalApi from '../GlobalApi';
import { toast } from 'react-toastify';

import './PersonalDetail.css';  // <-- import the CSS file here

function PersonalDetail({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('---', resumeInfo);
  }, []);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast('Details updated');
      },
      (error) => {
        setLoading(false);
        console.log(error);
        toast(error);
      }
    );
  };

  return (
    <div className="personal-detail-container">
      <h2 className="personal-detail-title">Personal Detail</h2>
      <p className="personal-detail-subtitle">Get Started with the basic information</p>

      <form onSubmit={onSave} className="personal-detail-form">
        <div>
          <label className="personal-detail-label">First Name</label>
          <Input
            name="firstName"
            defaultValue={resumeInfo?.firstName}
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="personal-detail-label">Last Name</label>
          <Input
            name="lastName"
            required
            onChange={handleInputChange}
            defaultValue={resumeInfo?.lastName}
          />
        </div>
        <div className="personal-detail-form-col-span-2">
          <label className="personal-detail-label">Job Title</label>
          <Input
            name="jobTitle"
            required
            defaultValue={resumeInfo?.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="personal-detail-form-col-span-2">
          <label className="personal-detail-label">Address</label>
          <Input
            name="address"
            required
            defaultValue={resumeInfo?.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="personal-detail-label">Phone</label>
          <Input
            name="phone"
            required
            defaultValue={resumeInfo?.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="personal-detail-label">Email</label>
          <Input
            name="email"
            required
            defaultValue={resumeInfo?.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="personal-detail-footer">
          <Button type="submit" disabled={loading} variant="contained" color="primary">
            {loading ? (
              <LoaderCircle className="button-loading-spin" />
            ) : (
              'Save'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

PersonalDetail.propTypes = {
  enabledNext: PropTypes.func.isRequired,
};

export default PersonalDetail;
