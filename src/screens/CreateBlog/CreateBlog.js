import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import './CreateBlog.css';

const initialErrors = {
  title: '',
  image: '',
  description: '',
};

function isInputEmpty(input) {
  if (input.trim()) {
    return false;
  }

  return true;
}

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState(initialErrors);

  const history = useHistory();

  const validateForm = () => {
    const updatedErrors = {};

    if (isInputEmpty(title)) {
      updatedErrors.title = 'Title is required';
    }

    if (isInputEmpty(description)) {
      updatedErrors.description = 'Description is required';
    }

    setErrors({ ...errors, ...updatedErrors });

    return !!(updatedErrors && Object.keys(updatedErrors).length === 0);
  };

  useEffect(() => {
    if (errors.title) {
      if (!isInputEmpty(title)) {
        setErrors({ ...errors, title: '' });
      }
    }
  }, [title]);

  useEffect(() => {
    if (errors.description) {
      if (!isInputEmpty(description)) {
        setErrors({ ...errors, description: '' });
      }
    }
  }, [description]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const res = await fetch('https://us-central1-erx-frontend-test.cloudfunctions.net/blog', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      if (res.ok) {
        history.push('/');
      } else {
        // eslint-disable-next-line no-alert
        alert('server error');
      }
    }
  };

  return (
    <>
      <h1>Add New Blog</h1>

      <form onSubmit={onFormSubmit}>
        <div className="form-header">
          <div className="form-container-right">
            <p className="form-title">New Post</p>
          </div>

          <div className="form-container-left form-content">
            <button type="submit" className="button primary">
              <span className="material-icons icon">save</span>
              Save
            </button>
            <button type="button" className="button disabled" disabled>
              <span className="material-icons-outlined icon">notifications_off</span>
              Publish
            </button>
          </div>

        </div>

        <div className="form-content">
          <div className="form-container-right">
            <TextInput label="Title" placeholder="Enter Title" value={title} setValue={setTitle} error={errors.title} />
          </div>
          <div className="form-container-left">
            <TextInput label="Image" placeholder="Enter Image Url" value={imageUrl} setValue={setImageUrl} message="Image Url" />
          </div>
        </div>

        <div className="form-container-right">
          <TextInput textarea label="Description" placeholder="Enter Description" value={description} setValue={setDescription} error={errors.description} />
        </div>
      </form>
    </>
  );
}

export default CreateBlog;
