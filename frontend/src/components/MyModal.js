import "../styles/inputModal.css";

import StartButton from "./StartButton";

const MyModal = (props) => {
  const { title, onSubmit, URLinput } = props;
  if (URLinput) {
    return (
      <>
        <div className="overlay">
          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="modal-tytle">
              <div>{title}</div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control url-input-form"
                  placeholder="amazonの商品ページのURLを入力してください"
                  autoFocus
                />
              </div>
              <div className="enter-button">
                <StartButton text={"Enter"} type={"submit"} width={"8rem"} />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default MyModal;
