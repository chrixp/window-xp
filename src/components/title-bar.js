import imageLink from '@src/image-link'
import styled from 'styled-components'
import "xp.css/dist/XP.css"

const ApplicationIcon = styled.img`
    height: 25px;
    object-fit: contain;
    width: ${props => props.width ? props.width : '40'}px;
    opacity: ${props => props.clicked === true ? 0.5 : 1};
`

const Titlebar = (props) => (
    <div className="title-bar">
        <div className="title-bar-text">
            <ApplicationIcon src={imageLink(props.img)} />
            <p>{props.desc}</p>
        </div>
        <div className="title-bar-controls">
            <button onClick={props.minimize} aria-label="Minimize"></button>
            <button onClick={props.resize} aria-label="Maximize"></button>
            <button onClick={props.close} aria-label="Close"></button>
        </div>
    </div>
)

export default Titlebar