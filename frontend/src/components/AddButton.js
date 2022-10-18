const AddButton = ({ onClicked }) => {
  return (
    <button
      className="btn btn-secondary btn-circle btn-circle-sm m-1"
      onClick={onClicked}
    >
      <b>＋</b>
    </button>
  );
};

export default AddButton;
