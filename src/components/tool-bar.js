import styled from 'styled-components'


const ToolbarContainer = styled.div`
    background-color: rgb(236, 233, 216);
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 3px;
`

const ToolbarItem = styled.p`
    font-size: 11px;
    padding: 8px;
    &:hover {
        cursor: pointer;
        background-color: rgb(22, 96, 232);
        color: white;
    }
`

const Toolbar = (props) => {
    return (
        <ToolbarContainer> 
            {props.bars.map(bar => <ToolbarItem key={bar}>{bar}</ToolbarItem>)}
        </ToolbarContainer>
    )
}

export default Toolbar