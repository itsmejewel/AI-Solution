// // src/SignIn.js
// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const AdminSignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [emailSent, setEmailSent] = useState(false);
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     const auth = getAuth();
//     setError('');
//     try {
//       // Firebase sign-in logic
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/admin-dash'); // Redirect to the dashboard after sign-in
//     } catch (error) {
//       switch(error.code) {
//         case 'auth/invalid-email':
//           setError('Invalid email format.');
//           break;
//           case 'auth/user-disabled':
//             setError('This account has been disabled.');
//             break;
//           case 'auth/user-not-found':
//             setError('No account found with this email.');
//             break;
//           case 'auth/wrong-password':
//             setError('Incorrect password. Please try again.');
//             break;
//           default:
//             setError('Failed to sign in. Please try again.');
//             break;
//       }
//     }
//   };

//   const handleForgotPassword = async () => {
//     const auth = getAuth();
//     setError('');
//     setEmailSent(false);
//     if (!email) {
//       setError('Please enter your email to reset your password.');
//       return;
//     }
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setEmailSent(true); // Show a success message
//     } catch (error) {
//       switch (error.code) {
//         case 'auth/invalid-email':
//           setError('Invalid email format.');
//           break;
//         case 'auth/user-not-found':
//           setError('No account found with this email.');
//           break;
//         default:
//           setError('Error sending reset email. Please try again.');
//           break;
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-center mb-6">Admin Sign In</h2>
        
//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Sign In Button */}
//         <button
//           onClick={handleSignIn}
//           className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Sign In
//         </button>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

//         {/* Success Message for Forgot Password */}
//         {emailSent && <p className="text-green-500 text-sm mt-4 text-center">Password reset email sent! Check your inbox.</p>}

//         {/* Forgot Password Link */}
//         <div className="mt-4 text-center">
//           <button 
//             onClick={handleForgotPassword} 
//             className="text-sm text-blue-500 hover:underline"
//           >
//             Forgot Password?
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignIn;



import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (isLocked) return;

    const auth = getAuth();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin-dash');
      setAttempts(0); // Reset attempts on success
    } catch (error) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        default:
          setError('Failed to sign in. Please try again.');
          break;
      }
      
      if (newAttempts >= 5) {
        setIsLocked(true);
        setTimeout(() => {
          setIsLocked(false);
          setAttempts(0); // Reset attempts after lockout
        }, 10000);
      }
    }
  };

  const handleForgotPassword = async () => {
    const auth = getAuth();
    setError('');
    setEmailSent(false);
    if (!email) {
      setError('Please enter your email to reset your password.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        default:
          setError('Error sending reset email. Please try again.');
          break;
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Sign In</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 text-gray-500"
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>

        <button
          onClick={handleSignIn}
          className={`w-full py-3 rounded-md transition duration-200 ${isLocked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={isLocked}
        >
          {isLocked ? 'Locked. Try again later' : 'Sign In'}
        </button>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        {emailSent && <p className="text-green-500 text-sm mt-4 text-center">Password reset email sent! Check your inbox.</p>}

        <div className="mt-4 text-center">
          <button 
            onClick={handleForgotPassword} 
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;

