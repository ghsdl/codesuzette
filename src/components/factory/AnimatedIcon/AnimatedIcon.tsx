import Lottie from 'react-lottie';

interface AnimatedIconProps {
  options: {
    loop?: boolean;
    autoplay?: boolean;
    animationData: object;
    rendererSettings?: {
      preserveAspectRatio: string;
    };
  };
  width?: number;
  height?: number;
  style?: object;
  className?: string;
}

const AnimatedIcon = ({
  options,
  style,
  width,
  height,
  className
}: AnimatedIconProps) => {
  return (
    <div className={className}>
      <Lottie options={options} height={height} width={width} style={style} />
    </div>
  );
};

export default AnimatedIcon;
