import React from 'react'

const Form = (props) => {
    //state to hold the data of our form
    const [formData, setFormData] = React.useState({
        searchterm: "",
    });
    //handle change - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        //prevents page from refreshing on form submission
        event.preventDefault();
        //pass the search term to the moviesearch prop, which is apps 
        //getMovie function
        props.moviesearch(formData.searchterm);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchTerm}
                    />
            <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Form
