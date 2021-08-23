import React from 'react'
import { useYouTube } from '../../Providers/YouTubeProvider'
import { StyledLoader, Spinner } from './Styles'

const Loader = () => {
    const { spinner } = useYouTube()
    return <StyledLoader className={!spinner ? 'hidden' : ''}><Spinner /></StyledLoader>
}
export default Loader