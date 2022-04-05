import { FilterListItem } from "./FilterListItem";
import { v4 as uuid } from "uuid";

const FilterList = ({
  filterHeading,
  filterOptionsList,
  filterType,
  filterHandler,
  isChecked,
}) => {
  return (
    <>
      <div className="">
        <h3 className="txt-xl txt-bold">{filterHeading}</h3>
        <ul className="p-sm">
          {filterOptionsList &&
            filterOptionsList.map((filterItem) => {
              return (
                <FilterListItem
                  key={uuid()}
                  id={uuid()}
                  label={filterItem}
                  value={filterItem}
                  type={filterType}
                  changeHandler={filterHandler}
                  name={filterHeading}
                  isChecked={isChecked}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export { FilterList };
