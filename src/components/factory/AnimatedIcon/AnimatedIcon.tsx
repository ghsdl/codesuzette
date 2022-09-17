import Lottie from 'react-lottie';

interface AnimatedIconProps {
  options: {
    loop?: boolean | number;
    autoplay?: boolean;
    animationData: object;
    rendererSettings?: {
      preserveAspectRatio: string;
    };
  };
  isStopped?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const AnimatedIcon = ({
  isStopped,
  options,
  width,
  height,
  className
}: AnimatedIconProps) => {
  return (
    <div className={className}>
      <Lottie
        isStopped={isStopped}
        options={options}
        height={height}
        width={width}
      />
    </div>
  );
};

export default AnimatedIcon;
