import './Title.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => (
  <h1 className={`title ${className} `}>{children}</h1>
);

export default Title;
