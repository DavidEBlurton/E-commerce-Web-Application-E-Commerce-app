import React, { useState } from 'react';
import { useUpdateUser } from '../../../hooks/useUser';

const UpdateProfile: React.FC<{ userId: number }> = ({ userId }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate } = useUpdateUser(userId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="New Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="New Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProfile;
