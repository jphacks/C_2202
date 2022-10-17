import "../styles/loading.css";

const Loader = (props) => {
  return (
    <>
      {props.loaderFlag ? (
        <main className="wrapper">
          <section className="container">
            <div className="loader"></div>
          </section>
        </main>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
