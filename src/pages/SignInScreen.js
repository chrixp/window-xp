import React from 'react'
import styled from 'styled-components'
import SignInWallpaper from '@images/sign-in.png'
import WindowXp from '@images/window-xp.png'
import Chess from '@images/chess.jpg'

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
`

const DarkBlueBlock = styled.div`
    background-color: #1a31a3;
    width: 100%;
    height: 12%;
`
const WindowXPImage = styled.img`
    width: 300px;
    object-fit: contain;
    @media (max-width: 800px) {
        width: 200px
    }

    @media (max-width: 500px) {
        width: 140px
    }
`

const SignInImage = styled.img`
    width: 70px;
    height: 70px;
    border: 1.3px solid rgba(255,255,255,0.8);
    border-radius: 5px;
    @media (max-width: 800px) {
        width: 50px
        height: 50px;
    }
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
    }

` 

const SignInUser = styled.span`
    font-weight: bold;
    font-size: 15px;
    color: white;
    margin-top: 5px;
    margin-left: 20px;
    @media (max-width: 800px) {
        font-size: 13px;
        margin-left: 10px;
    }

`

const SignInImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0.7;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }

`
const Divider = styled.div`
    margin: 0 70px;
    height: 350px;
    width: 3px;
    background-image: linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255, 0.3) ,rgba(255,255,255, 0.05));
    @media (max-width: 500px) {
        margin: 0 35px;
        height: 250px;
    }
`

const SignInScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${SignInWallpaper});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    flex: 1;

`

const SignInScreen = (props) => {
    return (
        <VerticalContainer>
            <DarkBlueBlock />
            <SignInScreenContainer>
                    <WindowXPImage src={WindowXp} />
                    <Divider />
                    <SignInImageContainer onClick={() => props.history.push('/home')}>
                        <SignInImage src={Chess} />
                        <SignInUser>Chris Phan</SignInUser>
                    </SignInImageContainer>
                </SignInScreenContainer>
            <DarkBlueBlock />
        </VerticalContainer>
    )
}
   


export default SignInScreen