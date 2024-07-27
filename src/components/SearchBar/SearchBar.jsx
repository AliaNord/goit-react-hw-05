

const SearchBar = ({ onSubmit,filterValue }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    // if (!value) {
    //   return
    // }
    // if (value != filterValue) {
    //    toast.error("This movie doesn't exist")
    //    return
    // }
    onSubmit(value)
  }
  return (
    <form onSubmit={formSubmit}>
      <input
      name="search"
        type="search"
        placeholder="Search"
        defaultValue={filterValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
