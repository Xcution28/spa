import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = ({ onCancel, onRegister }) => {
    const validation = Yup.object().shape({
        name: Yup.string().required('Обязательное поле').max(100, 'Максимально символов 100 или меньше').matches(/^[^\d]+$/, 'Имя не должно содержать числа'),
        email: Yup.string().required('Обязательное поле').email('Некорректная почта').max(100, 'Максимально символов 100 или меньше'),
        password: Yup.string().required('Обязательное поле').matches(/^[^\sа-яА-Я]+$/, 'Не может содержать кириллицу'),
        description: Yup.string().max(500, 'Максимально символов 500 или меньше'),
    });

    const handleRegister = async (values, actions) => {
        console.log(values);
        try {
            await validation.validate(values, { abortEarly: false }); //собираю ошибки валидации
            // Регистрация только при успешной валидации
            onRegister(values);
        } catch (errors) {
            const formErrors = {};
            errors.inner.forEach(error => {
                formErrors[error.path] = error.message; //каждой ошибке сопоставляю поле формы
            });
            actions.setErrors(formErrors); //устанавливаю ошибки в форму
        } finally {
            actions.setSubmitting(false); //завершаю процесс отправки формы
        }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                description: '',
            }}
            onSubmit={handleRegister}
            validationSchema={validation}
        >
            <Form className="mx-auto mt-8 p-4 bg-white rounded shadow-lg max-w-md">
                {/* Имя */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* E-mail */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Пароль */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <Field
                        type="password"
                        id="password"
                        name="password"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Описание */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter your description"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Кнопки */}
                <div className="mt-4 flex justify-between">
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Register
                    </button>
                    <button
                        type="button"
                        className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-zinc-600"
                        onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;
