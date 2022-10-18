const SortButton = (props) => {
  const handleSort = (key) => {
    console.log("click : " + key);
    if (props.sort.key === key) {
      props.setSort({ ...props.sort, order: -props.sort.order });
    } else {
      props.setSort({
        key: key,
        order: 1,
      });
    }
  };
  return (
    <div className="sort-buttons">
      <button
        onClick={() => handleSort(props.column)}
        className={
          props.sort.key === props.column
            ? props.sort.order === 1
              ? "active asc"
              : "active desc"
            : ""
        }
      ></button>
    </div>
  );
};

export default SortButton;
