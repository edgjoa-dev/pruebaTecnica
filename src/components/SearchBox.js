export const SearchBox = ({handleChange})=>{

    const handleInputChange = (e) => {
        handleChange(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit} >
        <input
            autoFocus={true}
            type='text'
            onChange={handleInputChange}
        />
        </form>
    )
}