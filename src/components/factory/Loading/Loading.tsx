import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import loading from '../../../assets/animations/loading.json';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <AnimatedIcon
        width={100}
        height={100}
        options={{
          loop: true,
          autoplay: true,
          animationData: loading,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
      />
    </div>
  );
};

export default Loading;
