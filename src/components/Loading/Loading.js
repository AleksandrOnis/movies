import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loading.module.css';

function Loading() {
  return (
    <div className={s.wrap}>
      <Loader
        // className={s.Loader}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default Loading;
