import "../styles/loading.css";

const Loader = (props) => {
  return <>{props.loaderFlag ? <div class="loader"></div> : <></>}</>;
};

export default Loader;
