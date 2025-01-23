import styled from "styled-components";

// /images/cta-logo-one.png
// /images/cta-logo-two.png
// /images/login-background.jpg
function MainView () {
    return <>
        <Container>
            <Content>
                <LogoOne src={"/images/cta-logo-one.png"}></LogoOne>
                <SignUpButton>
                    <span>GET ALL THERE</span>
                </SignUpButton>
                <Description>
                    Get premier Access to Raya and the Last Dragon for and additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by 1$.
                </Description>
                <img src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    </>
}

const Container = styled.div`
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
    padding: 70px;
    background-repeat: no-repeat;
    
`

const Content = styled.div`
    min-width: 390px;
    padding: 80px 50px;
    width: 600px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
`

const LogoOne = styled.img`
    width: 100%;
    margin-bottom: 15px;
`
const SignUpButton = styled.button`
    background-color: #0063e5;
    border: none;
    border-radius: 4px;
    padding: 15px 0;
    
    span {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
    
    margin-bottom: 10px;
`

const Description = styled.p`
    text-align: center;
    padding: 0 15px;
    font-size: 12px;
    letter-spacing: 1.4px;

    margin-bottom: 15px;
`

export default MainView;