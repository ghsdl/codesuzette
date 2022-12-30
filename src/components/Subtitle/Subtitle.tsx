import './Subtitle.scss';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle = ({ children, className }: SubtitleProps) => (
  <h2 className={`subtitle ${className} `}>{children}</h2>
);

export default Subtitle;
