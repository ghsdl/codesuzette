import './Subheading.scss';

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

const Subheading = ({ children, className }: SubheadingProps) => (
  <h2 className={`subheading ${className} `}>{children}</h2>
);

export default Subheading;
