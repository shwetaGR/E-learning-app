import React from 'react'

const SearchStudent=(props)=>{
    const {term,handleTermChange}=props
    
 
    return (
        <div className="col-md-5">
            <div className="row mt-3">
            <form >
                <input type="text"
                       value={term}
                       onChange={handleTermChange}
                       placeholder="Search name or email..."
                       className="form-control"
                       />
            </form>
        </div>
        </div>
    )
}
export default SearchStudent