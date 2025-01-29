import styled from "styled-components";
import {observer} from "mobx-react-lite";
import LoginViewModel from "../ViewModel/LoginViewModel.tsx";

import {useEffect, useRef} from "react";
import {Link, useNavigate} from 'react-router-dom';


const LoginView= observer(() => {
    const navigate = useNavigate();
    const vm = useRef<LoginViewModel | null>(new LoginViewModel());

    useEffect(() => {
        console.log("View 마운트")
        vm.current?.init()
        vm.current?.setNavigate(navigate)
        return () => {
            // ViewModel 정리 (필요할 경우)
            // 메모리 해제
            console.log("View 언마운트")
            vm.current?.deinit();
            vm.current = null;
        };
    }, []);

    return <>
        <Container>
            <MainBox>

                <img id={"logo"} src="/images/logo.svg"/>
                <LoginBox>
                    <LogoBox>
                        <img src="/images/disney_logo_icon_2.png"/>
                    </LogoBox>
                    <LoginTitle>
                        <Link to="/main">
                            이메일을 입력하세요
                        </Link>

                    </LoginTitle>
                    <Description>
                        MyDisney 계정으로 디즈니+에 로그인하세요. 계정이 없는 경우 계정 생성을 위한 메시지가 표시됩니다.
                    </Description>

                    <FormBox>
                        <EmailInput type="email" placeholder={"이메일"}>

                        </EmailInput>


                        <NextButton onClick={(event) => {
                            // vm.join();
                            event.preventDefault(); // 기본 동작 방지
                            vm.current?.snsLogin();
                        }}>
                            로그인
                        </NextButton>

                        <SNSLoginButtons>
                            <Divider/>

                            <button className={"login-button google"} onClick={(event) => {
                                event.preventDefault();
                                console.log("버튼 클릭")

                                // vm.current?.showBottomSheet()
                                // vm.current?.showBottomSheet()
                                // vm.current?.showTextAlert()
                                vm.current?.showBottomSheet()
                            }}>

                                <img src="/snsLogos/googleLogo.png"/>

                                Sign in with Google
                            </button>

                            <button className={"login-button facebook"} onClick={(event) => {
                                event.preventDefault();
                                // vm.current?.snsLogin();
                            }}>
                                <img src="/snsLogos/facebookLogo.png"/>
                                Sign in with Facebook
                            </button>

                            <button className={"login-button x"} onClick={(event) => {
                                event.preventDefault();
                                vm.current?.getData();
                            }}>
                                <img src="/snsLogos/xLogo.png"/>
                                Sign in with X
                            </button>

                        </SNSLoginButtons>


                    </FormBox>

                    <Divider/>

                    <PolicyDescription>
                        <div className={"title"}>
                            디즈니+는 The Walt Disney Family of Companies의 계열사입니다
                        </div>
                        <span className={"description"}>
                            MyDisney 계정으로 디즈니+, ESPN, Walt Disney World, <a href={"#"}>기타 다른 서비스</a> 등 The Walt Disney
                            Family of Companies의 다양한 서비스에 간편하게 로그인해 보세요.
                        </span>
                    </PolicyDescription>

                    <CTALogoTwo>
                        <img src="/images/cta-logo-two.png"/>
                    </CTALogoTwo>
                </LoginBox>
            </MainBox>
        </Container>
        {/*푸터*/}
        <Footer>
            <CompanyInfoA to={"/home"}>디즈니+ 이용약관</CompanyInfoA>
            <CompanyInfoA to={"#"}>디즈니 이용 약관</CompanyInfoA>
            <CompanyInfoA to={"#"}>취소 및 환불 정책</CompanyInfoA>
            <CompanyInfoA to={"#"}>사업자 정보</CompanyInfoA>
            <CompanyInfoA to={"#"}>청소년 보호 정책</CompanyInfoA>
            <CompanyInfoA to={"#"}>개인정보 수집 및 이용</CompanyInfoA>
            <CompanyInfoA to={"#"}>개인정보의 제3자 제공 및 국외 이전</CompanyInfoA>
            <CompanyInfoA to={"#"}>개인정보 처리방침</CompanyInfoA>
            <CompanyInfoA to={"#"}>개인정보 처리방침 부속서</CompanyInfoA>
            <CompanyInfoA to={"#"}>관심 기반 광고</CompanyInfoA>
            <CompanyInfoA to={"#"}>고객센터</CompanyInfoA>
            <CompanyInfoA to={"#"}>지원되는 기기</CompanyInfoA>
            <CompanyInfoA to={"#"}>디즈니+ 소개</CompanyInfoA>
            <CompanyInfoA to={"#"}>© 2025 Disney and its related entities. All Rights Reserved.</CompanyInfoA>
        </Footer>
    </>
});

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    margin-bottom: 50px;
`

const MainBox = styled.div`
    width: 580px;
    min-width: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: #f9f9f9;

    #logo {
        min-width: 148px;
        width: 148px;
        margin-bottom: 24px;
    }
`

const LoginBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 56px 72px;
    border: none;
    border-radius: 15px;
    //box-sizing: border-box;
    background-color: #f9f9f9;
`

const LogoBox = styled.div`
    img {
        min-width: 97px;
        width: 97px;
        margin-bottom: 6px;
    }
`

const LoginTitle = styled.h3`
    color: black;
    font-weight: bold;
    margin-bottom: 12px;
`

const Description = styled.p`
    color: black;
`

const FormBox = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const EmailInput = styled.input`
    border: none;
    width: 100%;
    border-radius: 5px;
    padding: 18px 10px;
    background-color: rgb(233 235 240);
    margin-bottom: 20px;
`

const NextButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px 0;
    border: none;
    border-radius: 25px;
    margin-bottom: 10px;

    &:hover {
        opacity: 0.9;
    }
`

const SNSLoginButtons = styled.div`
    display: flex;
    flex-direction: column;
    
    .login-button {
        width: 100%;
        color: white;
        padding: 10px 0;
        border: none;
        border-radius: 25px;
        margin-bottom: 10px;
        justify-content: center;
        position: relative;
        &:hover {
            opacity: 0.9;
        }
        
        img {
            width: 25px;
            margin-right: 10px;
            position: absolute;
            left: 13px;
        }
    }
    
    .google {
        background-color: lightgray;
    }

    .facebook {
        background-color: #3B5998;
    }
    
    .x {
        background-color: black;
        img {
            scale: 1.2;
        }
    }
`

const Divider = styled.div`
    border-bottom: 1px solid rgb(233 235 240); // 구분선
    margin: 15px 0; // 위아래 여백
    width: 100%; // 가로 길이
`

const PolicyDescription = styled.div`

    span {
        font-size: 13.5px;
        color: rgb(95 97 102);
        font-weight: 700;
        margin-bottom: 5px;
    }

    div {
        font-size: 12px;
        color: rgb(95 97 102);
        font-weight: 320;

        a {
            color: blue;
            text-decoration: underline;
        }
    }
`
const CTALogoTwo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: gray;
    opacity: 0.5;
    border-radius: 10px;
    padding: 15px 10px;
    img {
        width: 100%;
    }
`

const Footer = styled.p`
    padding: 20px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
`

const CompanyInfoA = styled(Link)`
    color: rgb(95 97 102);
    opacity: 0.8;
    display: inline-block;
    padding: 8px 20px;
    font-size: 14px;
    
`
export default LoginView;