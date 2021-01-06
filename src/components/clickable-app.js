import styled, { css } from 'styled-components'
import imageLink from '@src/image-link'

const ClickableAppContainer = styled.div`
    padding: 7px;
    display: flex;
    font-size: 14px;
    flex-direction: row;
    background: transparent;
    align-items: center;
    color: black;
    > img {
        margin-right: 8px;
        width: 35px;
        height: auto;
        object-fit: contain;
    }
    ${props => props.clicked === true && css`
        background-color: rgb(47, 113, 205);
        color: white;
        > img {
            opacity: 0.5;
        }
    `}
    &:hover {
        color: white;
        background-color: rgb(47, 113, 205);
        cursor: pointer;
    }
`

const ClickableApp = (props) => {
    return (
        <ClickableAppContainer clicked={props.clicked} onClick={() => props.onClick()}>
            <img src={imageLink(props.img)} alt={props.alt} />
            <span>{props.desc}</span>
        </ClickableAppContainer>
    )
}

export default ClickableApp;

