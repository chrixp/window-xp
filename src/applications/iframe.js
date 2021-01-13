import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import LoadingCursor from '@images/loading-cursor.png'

const IFrameContainer = styled.iframe`
    width: calc(100% - 7px);
    height: 100%;
    border: none;
    margin: 0 3px;
    display: ${props => props.loaded === true ? 'block' : 'none'};
    &:hover {
        cursor: pointer;
    }
`

const IFrame = (props) => {
    const [loaded, setLoaded] = useState(false)
    const id = `iframe-${props.id}`
    useEffect(() => {
        const iframe = document.getElementById(id)
        const container = document.getElementsByClassName(props.id)[0]
        container.style.cursor = `url(${LoadingCursor}), wait`

        iframe.onload = () => {
            setLoaded(true)
        }

        return () => {
            iframe.onload = null
            container.style.cursor = `auto`
            
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return <IFrameContainer 
        loaded={loaded}
        id={id} 
        src={props.src} />
}

export default IFrame