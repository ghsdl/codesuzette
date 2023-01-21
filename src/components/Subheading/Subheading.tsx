import './Subheading.scss';

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

const Subheading = ({ children, className }: SubheadingProps) => (
  <h3 className={`subheading ${className} `}>{children}</h3>
);

export default Subheading;
