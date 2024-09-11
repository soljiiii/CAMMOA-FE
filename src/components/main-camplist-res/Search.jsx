import './Search.css'

const Search = () => {

    return(
        <div className='Search'>
            <div className='search-input'>
                <input/>
                <input type="date"/>
            </div>
            <div className='search-select'>
                <select>
                    <option>전체선택</option>
                </select>
                <select>
                    <option>전체선택</option>
                </select>
                <select>
                    <option>캠핑유형</option>
                </select>
                <select>
                    <option>인원수</option>
                </select>
            </div>
        </div>
    );
}

export default Search;