import React from 'react'
import { SearcherInput, StyledSearcherForm } from './Styles'
import { useForm } from 'react-hook-form'
import { useYouTube } from '../../Providers/YouTubeProvider'

const Searcher = () => {
    const { handleQuery, handleSpinner } = useYouTube()
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        handleSpinner(true)
        setTimeout(() => {
            handleSpinner(false)
            handleQuery(data.searcher)
        }, 750)
    }

    return (
        <StyledSearcherForm onSubmit={ handleSubmit(onSubmit) }>
            <SearcherInput placeholder="Search..." type="search" {...register('searcher')}/>
        </StyledSearcherForm>
    )
}
export default Searcher