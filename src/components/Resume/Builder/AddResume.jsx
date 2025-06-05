import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import { Button, Input, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import './AddResume.css';

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    if (!resumeTitle) return;
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data)
      .then((resp) => {
        const documentId = resp?.data?.data?.documentId;
        if (documentId) {
          setLoading(false);
          navigate('/dashboard/resume/' + documentId + '/edit');
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div
        className="add-resume-box"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare className="add-icon" />
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Create New Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a title for your new resume
          </DialogContentText>
          <TextField
            fullWidth
            variant="outlined"
            label="Resume Title"
            value={resumeTitle}
            onChange={(e) => setResumeTitle(e.target.value)}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onCreate}
            disabled={!resumeTitle || loading}
            color="primary"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddResume;
