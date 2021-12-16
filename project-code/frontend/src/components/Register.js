import { Button, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import "./Register.scss";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    const onClick = (data) => {
        axios.post('/register', data).then((res) => {
            console.log(res)
            navigate('/login');
        })
    };

    return(
        <>
        <div className="register">
            <div className="registertitle">REGISTER</div>
            <Formik 
				initialValues={{ email: "", password: "", name:""}}
				validationSchema={Yup.object({
					email: Yup.string().email('잘못된 이메일 주소입니다.')
						.required('이메일을 입력해주세요.'),
					password: Yup.string()
						.min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
						.max(20, '비밀번호는 20자 이하여야 합니다.')
						.required('비밀번호를 입력해주세요.'),
                    name: Yup.string()
                        .required('이름을 입력해주세요.')
				})}
				onSubmit={(values, {setSubmitting}) => {
					onClick(values, navigate);
					setSubmitting(false);
				}}>
                {formik => (
					<form onSubmit={formik.handleSubmit}>
						<input className="email-input" id="email" typ="eamil"
						placeholder="  이메일을 입력하세요."  
						{...formik.getFieldProps('email')} />
						{ formik.touched.email && formik.errors.email ? 
							(<div className="error">{formik.errors.email}</div>) : null }

						<input className="pw-input" id="password" type="password"
						placeholder="  비밀번호를 입력하세요."  
						{...formik.getFieldProps('password')}/>
						{ formik.touched.password && formik.errors.password ? 
							(<div className="error">{formik.errors.password}</div>) : null }

                        <input className="nick-input" id="name" type="text"
						placeholder="  이름을 입력하세요."  
						{...formik.getFieldProps('name')}/>
						{ formik.touched.name && formik.errors.name ? 
							(<div className="error">{formik.errors.name}</div>) : null }

						<button className="registerbutton" type="submit">Register</button>
					</form>
				)}    
            </Formik>
        </div>
        </>
    );

}

export default Register;