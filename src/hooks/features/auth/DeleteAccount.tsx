import React from 'react';
import { useDeleteUser } from '../../../hooks/useUser';

const DeleteAccount: React.FC<{ userId: number }> = ({ userId }) => {
  const { mutate } = useDeleteUser(userId);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      mutate();
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteAccount;
