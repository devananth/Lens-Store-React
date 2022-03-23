const SearchBar = ({ mobileScreen }) => {
  return (
    <form
      className={`nav__search__container ${mobileScreen && `mobile__search`}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <button className="icon nav__search__icon" type="submit">
        <i className="fa fa-search"></i>
      </button>
      <input
        className="nav__search"
        type="search"
        placeholder="Enter to Search"
      />
    </form>
  );
};

export { SearchBar };
