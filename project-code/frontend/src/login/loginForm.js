import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import { loginDB } from "./LoginValidation";
import "./LoginForm.scss";
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="login">
				<div className="logintitle">LOGIN</div>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={Yup.object({
						email: Yup.string().email('잘못된 이메일 주소입니다.')
							.required('이메일을 입력해주세요.'),
						password: Yup.string()
							.min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
							.max(20, '비밀번호는 20자 이하여야 합니다.')
							.required('비밀번호를 입력해주세요.'),
					})}
					onSubmit={(values, { setSubmitting }) => {
						try {
							loginDB(values, navigate);
						} catch { }
						setSubmitting(false);
					}}>
					{formik => (
						<form onSubmit={formik.handleSubmit}>
							<input className="email-input" id="email" typ="eamil" style={{ paddingLeft: '10px' }}
								placeholder="  이메일을 입력하세요."
								{...formik.getFieldProps('email')} />
							{formik.touched.email && formik.errors.email ?
								(<div className="error">{formik.errors.email}</div>) : null}

							<input className="pw-input" id="password" type="password" style={{ paddingLeft: '10px' }}
								placeholder="  비밀번호를 입력하세요."
								{...formik.getFieldProps('password')} />
							{formik.touched.password && formik.errors.password ?
								(<div className="error">{formik.errors.password}</div>) : null}

							<button className="loginbutton" type="submit">Login</button>
						</form>
					)}
				</Formik>
				<a className="registerService">
					저희 서비스가 처음이시라면?
					<NavLink to="/register"> 회원가입</NavLink>
				</a>
			</div>
		</>
	)

}


export default LoginForm;
