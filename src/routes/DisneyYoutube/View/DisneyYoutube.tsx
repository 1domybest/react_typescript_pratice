import {observer} from "mobx-react-lite";
import LoginViewModel from "../../Login/ViewModel/LoginViewModel.tsx";
import styled from "styled-components";
import {Link} from "react-router-dom";

const DisneyYoutube = observer(() => {
    // const {homeData, isLoading} = LoginViewModel;
    return <>
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.png" alt="cta-logo-one" />
                    <SignUp to={"/View1"}> GET ALL THERE </SignUp>
                    <Description>Get premier Access to Raya and the Last Dragon for and additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by 1$.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-two" />
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    </>
});


const Container = styled.section`
    overflow: hidden;
    
    // 이건 VStack으로 사용한다는 뜻
    display: flex;
    flex-direction: column;
    
    // text는 중앙
    text-align: center;
    
    // 높이는 화면크기
    height: 100vh;
`

const Content = styled.div`
    //margin-bottom: 10vw; // 이유없는 마진임
    width: 100%;
    min-height: 100vh;
    position: relative;
    //박스의 사이즈가 마진 혹은 패딩을 포함하도록 그니까 300px + 패딩했을시 300px 안에 패딩이 포함도도록
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    //height: 100%; // 이유없는 높이 임
`

const BgImage = styled.div`
    height: 100vh;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled(Link)`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    
    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`



export default DisneyYoutube;
