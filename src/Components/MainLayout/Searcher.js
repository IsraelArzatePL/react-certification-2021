import React from 'react'
import { StyledSearcher, SearcherInput, SearcherButton } from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searcher = () => {
    return (
        <StyledSearcher>
            <SearcherInput placeholder="Search..." type="search"/>
            <SearcherButton type="button">
                <FontAwesomeIcon icon={faSearch}/>
            </SearcherButton>
        </StyledSearcher>
    )
}
export default Searcher