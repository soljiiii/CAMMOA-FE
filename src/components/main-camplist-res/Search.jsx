import DateRangePickerComponet from "./DateRangePickerComponent"
import './Search.css'

const Search = () => {

    return(
        <div className='Search'>
            <div className='search-container'>
                <div className='search-input'>
                    <input className='search-keyword-input'/>
                    <input className="search-date-input" type="date"/>
                    <DateRangePickerComponet/>
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
                <div className='search-button-container'>
                    <div className='search-filter'></div>
                    <button className='search-button'>검색하기</button>
                </div>
            </div>
        </div>
    );
}

export default Search;