import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input className={css.search} type="text" name="search" value={filter} />
    </div>
  );
}

export default SearchBox;
