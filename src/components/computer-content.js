import styled from 'styled-components'
import ClickableApp from '@components/clickable-app'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'

const FileSystem = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    flex-wrap: wrap;
    > div {
        margin-bottom: 20px !important;
        > img {
            width: 45px;
        }
        > span {
            font-size: 15px;
        }
        padding: 5px 15px;
        margin: 0 15px;
    }
`
const ComputerContent = observer(() => {
    const { ApplicationStore } = useStore()
    return (
        <FileSystem>
            {ApplicationStore.chosenFileChildren.map(file => (
                <ClickableApp
                    onClick={() => ApplicationStore.onClick(file.key)} 
                    {...file} />
            )) }
        </FileSystem>
    )
})

export default ComputerContent