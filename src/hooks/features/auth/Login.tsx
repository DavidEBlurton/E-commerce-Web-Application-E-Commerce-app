import React, { useState } from 'react';
import { useLoginUser } from '../../../hooks/useUser';
import { useAuth } from '../../../context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading, error, isSuccess } = useLoginUser();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutate({ username, password });
      login(username);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p className="error-message">Login failed: {error.message}</p>}
      {isSuccess && <p className="success-message">Logged in successfully!</p>}
    </form>
  );
};

export default Login;
