import styled from "styled-components";

const LoginModalView = () => {

    return <>
        <button onClick={(event) => {
            event.preventDefault()
            window.location.href = `http://localhost:8080/oauth2/authorization/naver`
        }}>
            네이버 로그인
        </button>
    </>
}


export default LoginModalView;