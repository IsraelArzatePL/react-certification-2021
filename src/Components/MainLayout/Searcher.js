import React from 'react'
import { SearcherInput, SearcherButton, StyledSearcherForm } from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searcher = () => {
    return (
        <StyledSearcherForm>
            <SearcherInput placeholder="Search..." type="search"/>
            <SearcherButton type="button">
                <FontAwesomeIcon icon={faSearch}/>
            </SearcherButton>
        </StyledSearcherForm>
    )
}
export default Searcher