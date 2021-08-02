import React from 'react'
import { SearcherInput, SearcherButton, StyledSearcherForm } from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useApi } from '../../Providers/ApiProvider'
import { useForm } from '../../Hooks/useForm'
import { Sleeper } from '../../Props/Sleeper'

const Searcher = () => {
    const { handlerQuery } = useApi()
    const inputSearcher = useForm()
    const handlerSubmit = e => {
        e.preventDefault()
        Sleeper(750).then(() => {
            handlerQuery(inputSearcher.value)
        })
    }

    return (
        <StyledSearcherForm onSubmit={ handlerSubmit }>
            <SearcherInput placeholder="Search..." type="search" {...inputSearcher}/>
            <SearcherButton type="button">
                <FontAwesomeIcon icon={faSearch}/>
            </SearcherButton>
        </StyledSearcherForm>
    )
}
export default Searcher