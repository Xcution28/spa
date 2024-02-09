import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm.jsx';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleCancel = () => {
        navigate('/home');
    };

    const handleRegister = values => {
        console.log(values);
        setRegistrationSuccess(true);
        setUserEmail(values.email);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4 text-center">User Registration</h1>
            {registrationSuccess ? (
                <div className="font-bold text-green-500 text-center">
                    <p>Мы отправили вам e-mail.</p>
                    <p>Для подтверждения электронной почты перейдите по ссылке из письма, которое было отправлено на {userEmail}</p>
                    <p>Если письмо не пришло, проверьте «Спам».</p>
                </div>
            ) : (
                <RegistrationForm onCancel={handleCancel} onRegister={handleRegister} />
            )}
        </div>
    );
};

export default RegistrationPage;