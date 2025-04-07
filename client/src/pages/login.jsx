import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email dan password tidak boleh kosong!');
      return;
    }

    if (password.length < 8) {
      toast.error('Password minimal 8 karakter!');
      return;
    }

    toast.success('Login berhasil!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-lime-200 to-green-400 px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white/30 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 text-gray-800">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">Welcome Back</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-green-600 hover:underline">Sign up</a>
        </p>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-700 hover:text-green-700 underline"
          >
            ← Back to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
