import { Player } from '@lottiefiles/react-lottie-player';

interface AnimatedIconProps {
  animationData: object;
  style: object;
  autoplay?: boolean;
  loop?: boolean | number;
  hover?: boolean;
  speed?: number;
  className?: string;
}

const AnimatedIcon = ({
  animationData,
  style,
  loop,
  speed,
  hover,
  autoplay,
  className
}: AnimatedIconProps) => {
  return (
    <div className={className}>
      <Player
        autoplay={autoplay}
        hover={hover}
        loop={loop}
        src={animationData}
        style={style}
        speed={speed}
      />
    </div>
  );
};

export default AnimatedIcon;
