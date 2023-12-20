import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';

const DeleteUser = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDel = async () => {
    try {
      await axios.delete(`/user/${id}`);
      dispatch(userActions.logout()); // Dispatch log
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h4>You really want to delete your account</h4>
      <button onClick={handleDel}>Delete</button>
    </div>
  );
};

export default DeleteUser;
