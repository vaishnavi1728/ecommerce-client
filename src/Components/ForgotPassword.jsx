import { useState } from "react";
import { useDispatch } from 'react-redux';
import { updatePassword } from '../Features/Userslice';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import img2 from '../images/img2.png';

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        oldpassword: '',
        newpassword:'',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (userData.oldpassword && userData.newpassword) {
            dispatch(updatePassword(userData))
            .then((response) => {
                if (response.payload && response.payload.success) {
                    toast.success(response.payload.message);
                    // Redirect to login page after successful password reset
                    window.location.href = '/';
                } else {
                    setError("Failed to reset password.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Password reset failed. Please try again later.");
            });
        } else {
            toast.error('Fill all the details!');
        }
    };
  return (
    <>
    <>
            <div className="container" id="home">
                <div className="login-left">
                    <div className="login-header">
                        <h1>Welcome</h1>
                        <p>Reset Your Password here..............</p>
                    </div>
                    <form action="" className="login-form" autoComplete="off" onSubmit={handlePasswordReset}>
                        <div className="login-content">
                            <div className="form-item">
                                <label htmlFor="oldpassword">Enter Old Password</label>
                                <input type="password" name="oldpassword" value={userData.oldpassword} onChange={handleInputChange} placeholder="Enter your Old Password" required className="pass-key" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="newpassword">Enter New Password</label>
                                <input type="password" name="newpassword" value={userData.newpassword} onChange={handleInputChange} placeholder="Enter your New Password" required className="pass-key" />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <button type="submit">Reset Password</button>
                        </div>
                        <p>already registered</p>
                        <div className="login-footer">
                            <Link to="/" className="button" id="button2">Login</Link>
                        </div>
                    </form>
                </div>
                <div className="login-right">
                    <img src={img2} alt="" />
                </div>
            </div>
        </>
    </>
  )
}

export default ForgotPassword
