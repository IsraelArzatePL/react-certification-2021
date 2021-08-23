import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, SpanError } from './Styles'
import Video from './Video'
import { useYouTube } from '../../Providers/YouTubeProvider'
import { pageTransitions, pageVariants } from '../../Animations/PageTransition'

const VideosContainer = () => {
    const { query, handleList, list, handleSpinner } = useYouTube()
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 12,
                key: 'AIzaSyCZTUpxTAG4K2a8HTrtAVyMXq2rGHYImEQ',
                q: query
            }
        })
            .then(resp => {
                const items = resp.data.items
                handleList(items)
            })
            .catch(err => {
                setTimeout(() => {
                    handleSpinner(false)
                    setError(err)
                }, 750)
            })
    }, [query])

    return (
        error ? <SpanError exit="out" animate="in" initial="out" variants={pageVariants} transition={pageTransitions}>An unexpected error occurred, try again</SpanError> :
        <Grid exit="out" animate="in" initial="out" variants={pageVariants} transition={pageTransitions}>
            {list && list.map((video) => (
                <Video key={video.id.videoId} image={video.snippet.thumbnails.medium.url} title={video.snippet.title} desc={video.snippet.description} />
            ))}
        </Grid>
    )
}
export default VideosContainer