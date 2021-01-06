import React, { useState } from 'react'
import styled from 'styled-components'

const TextField = styled.textarea`
    width: 100%;
    flex: 1;
    font-size: 14.5px;
    background-color: white;
`

const Notepad = () => {
    const [text,setText] = useState('')
    return  <TextField 
                value={text}
                onChange={(e) => setText(e.target.value)} />
}

export default Notepad