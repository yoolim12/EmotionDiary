import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import LoginForm from "./loginForm";
import '../Login.scss';
import { connect } from 'react-redux';


const LoginPage = ({Login}) => {
    const navigate = useNavigate();
    console.log(Login)
    useEffect(() => {
        if(Login.login.is_login){
            console.log("already logined!");
            navigate(`/calendar`);
        }
    }, [])

    return (
        <div>
            <LoginForm />
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {Login:state};
}
export default connect(mapStateToProps)(LoginPage);