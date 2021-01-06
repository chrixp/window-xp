import imageLink from '@src/image-link'
import styled from 'styled-components'

const ImageContainer = styled.img`
    height: 100%;
    object-fit: contain;
`

const Image = (props) => {
   return  <ImageContainer src={imageLink(props.img)} alt="Personal picture" />
}

export default Image