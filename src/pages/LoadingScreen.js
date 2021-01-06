import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import WindowXP from '@images/window-xp.png'

const loading = keyframes`
    0% {
        transform: translate(-30px);
    }
    100% {
        transform: translate(150px);
    }
`
const Background = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 99;
`
const WindowXPImage = styled.img`
    width: calc(15vw + 12em);
    margin-bottom: 50px;
`

const LoadingBarContainer = styled.div`
    width: 200px;
    height: 25px;
    border: 2px solid #b2b2b2;
    border-radius: 7px;
    margin: 0 auto;
    padding: 2px 1px;
    overflow: hidden;
    font-size: 0;
`

const LoadingBarContent = styled.div`
    width: 9px;
    height: 100%;
    background: linear-gradient(to bottom, #2838c7 0%,#5979ef 17%,#869ef3 32%,#869ef3 45%,#5979ef 59%,#2838c7 100%);
    display: inline-block;
    margin-right: 2px;
    animation: ${loading} 2s infinite linear;
`

const LoadingScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.history.push('/authenticate')
        }, 3500)
    }, [props])
    return (
        <Background>
            <WindowXPImage src={WindowXP} alt="" />
            <LoadingBarContainer>
                <LoadingBarContent />
                <LoadingBarContent />
                <LoadingBarContent />
            </LoadingBarContainer>
        </Background>
    )
}
export default LoadingScreen