import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import YahooIdle from '@images/idle-yahoo.gif'
import YahooHappy from '@images/yahoo.gif'

const YahooContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1em;
    ${props => props.authenticated && css`
        justify-content: flex-start;
        > img {
            margin-bottom: 15px;
        }
    `}
`

const YahooIcon = styled.img`
    width: 200px;
    object-fit: contain;
`

const YahooLogIn = styled.div`
    display: flex;
    flex-direction: column;
    
`
const YahooLink = styled.span`
    margin: 10px 0;
    color: blue;
    opacity: 0.7;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
const YahooLogInLabel = styled.div`
    padding: 5px;
`
const YahooLogInInput = styled.input`
    border: 1px solid gray !important;
`

const YahooCheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const YahooCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;
    &:hover {
        cursor: pointer;
    }
`

const YahooSignInButton = styled.button`
    margin-top: 8px;
    &:hover {
        cursor: pointer;
    }
`
const checkboxes = [
    "Remember my ID & password",
    "Sign in automatically",
    "Sign in as invisible to everyone"
].map(checkbox => ({ message: checkbox, checked: false }))

const YahooMessenger = () => {
    const [checkes, setCheckes] = useState(checkboxes)
    const [authenticated, setAuthenticated] = useState(false)
    const yahooIcon = authenticated ? YahooHappy : YahooIdle

    const toggleCheck = (i) => {
        const newCheckes = [...checkes]
        newCheckes[i].checked = !newCheckes[i].checked
        setCheckes(newCheckes)
    }

    const logIn = () => {
        setAuthenticated(true)
    }

    const logOut = () => {
        setAuthenticated(false)
    }

    return (
        <YahooContainer authenticated={authenticated}>
            <YahooIcon src={yahooIcon} alt="Yahoo Idle" />
            {authenticated ?  <YahooSignInButton  onClick={() => logOut()}>Cancel</YahooSignInButton> : (
                <React.Fragment>
                    <YahooLogIn>
                        <YahooLogInLabel>Yahoo! ID:</YahooLogInLabel>
                        <YahooLogInInput type="text" />
                    </YahooLogIn>
                    <YahooLogIn>
                        <YahooLogInLabel>Password:</YahooLogInLabel>
                        <YahooLogInInput type="password" />
                    </YahooLogIn>
                    <YahooLink>Get a new Yahoo! ID...</YahooLink>
                    <YahooCheckboxContainer>
                        {checkes.map((check,i)=> (
                            <YahooCheckbox onClick={() => toggleCheck(i)} key={check.message}>
                                <YahooLogInInput
                                    type="checkbox" 
                                    readOnly
                                    checked={check.checked}/>
                                <label>{check.message}</label>
                            </YahooCheckbox>
                        ))}
                    </YahooCheckboxContainer>
                    <YahooSignInButton onClick={() => logIn()}>Sign In</YahooSignInButton>
                    <YahooLink>Forgot your password ?</YahooLink>
                </React.Fragment>
            )}  
        </YahooContainer>
    )
}

export default YahooMessenger