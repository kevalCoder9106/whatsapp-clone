import './SearchContacts.css'

const SearchContacts = () => {
    return(
        <div className='search-container'>
            <i class="fas fa-search"></i>
            <input type='text' placeholder='Seach or Start new chat'></input>
        </div>
    )
}

export default SearchContacts