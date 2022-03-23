import React,{useState} from 'react'
import {v4 as uuiidv4} from 'uuid'

const CourseForm=(props)=>{
const {formSubmission}=props

    const[name,setName]=useState("")
    const[desciption,setDescription]=useState("")
    const[duration,setDuration]=useState("")
    const[releaseDate,setReleaseDate]=useState("")
    const[isDelete,setIsDelete]=useState(false)
    const[category,setCategory]=useState("")
    const[validity,setValidity]=useState("")
    const[level,setLevel]=useState("")
    const[author,setAuthor]=useState("")

    
    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="name"){
            setName(e.target.value)
        }else if(attr==="description"){
            setDescription(e.target.value)
        }else if(attr==="duration"){
            setDuration(e.target.value)
        }else if(attr==="releaseDate"){
            setReleaseDate(e.target.value)
        }else if(attr==="category"){
            setCategory(e.target.value)
        }else if(attr==="validity"){
            setValidity(e.target.value)
        }else if(attr==="level"){
            setLevel(e.target.value)
        }else if(attr==="author"){
            setAuthor(e.target.value)
        }
    }

    const handleDeleteChange=(e)=>{
        setIsDelete(e.target.checked)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const courseFormData={
            id:uuiidv4(),
            name:name,
            desciption:desciption,
            duration:duration,
            releaseDate:releaseDate,
            isDelete:isDelete,
            category:category,
            validity:validity,
            level:level,
            author:author
        }
        console.log("course Form ", courseFormData)
        formSubmission(courseFormData)
    }
    return (
        <div className="card w-75">
        <div className="card-body">
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label className="form-label">Name</label><br/>
                  <input type="text" 
                         name="name" 
                         value={name} 
                         onChange={handleChange} 
                         placeholder="name..."
                         className="form-control"
                         />
                        <br/>
               </div>

               <label className="form-label">Desciption</label><br/>
                <input   type="text" 
                         name="description" 
                         value={desciption} 
                         onChange={handleChange} 
                         placeholder="duration..."
                         className="form-control"
                     />
                     <br/> 

               <label className="form-label">Duration</label><br/>
                 <input type="text" 
                        name="duration" 
                        value={duration} 
                        onChange={handleChange} 
                        placeholder="duration in min..."
                        className="form-control"
                   />
                   <br/>

                <label className="form-label">Release Date</label><br/>
                  <input type="date" 
                         name="releaseDate" 
                         value={releaseDate} 
                         onChange={handleChange} 
                         className="form-control"
                        />
                     <br/>  
           <div className="form-group">
                 <input type="checkbox" 
                        checked={isDelete} 
                        onChange={handleDeleteChange} 
                        className="form-check-input"
                       />
                 <label className="form-check-label">isDelete</label>
                </div>
                <br/>

            <div className="form-group">
                 <label className="form-label">Category</label><br/>
                  <select className="form-select" name="category" value={category}  onChange={handleChange}>
                    <option value="">select</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
               </select>
            </div>
            <br/>

            <div className="form-group">
                <label className="form-label">Validity</label><br/>
                   <input type="text" 
                          name="validity" 
                          value={validity} 
                          onChange={handleChange} 
                          placeholder="validity in months..."
                          className="form-control"
                   />
                </div>
                <br/>
             
            <label className="form-label">Level</label><br/>
            <div class="form-check form-check-inline">
               <input type="radio" 
                      name="level" 
                      value="beginner" 
                      checked={level==="beginner"} 
                      onChange={handleChange}
                      className="form-check-input"
                   />
                   <label className="form-check-label" >Beginner</label>
            </div>

            <div class="form-check form-check-inline">
            <input type="radio" 
                   name="level" 
                   value="Intermiediate"  
                   checked={level==="Intermiediate"} 
                   onChange={handleChange}
                   className="form-check-input"
                   />
                   <label className="form-check-label" >Intermiediate</label>
             </div>
             
             <div class="form-check form-check-inline">
            <input type="radio" 
                   name="level" 
                   value="expert" 
                   checked={level==="expert"} 
                   onChange={handleChange}
                   className="form-check-input"
                   />
                   <label className="form-check-label" >Expert</label>
                   
       </div>
       <br/>
            <label className="form-label">Author</label><br/>
            <div className="form-group">
            <input type="text" 
                   name="author" 
                   value={author} 
                   onChange={handleChange} 
                   placeholder="author..."
                   className="form-control"
                   />
                </div>
            <br/>

        <input type="submit" value="save"/>
            </form>
         </div>  
        </div>
    )
}
export default CourseForm