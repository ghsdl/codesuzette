import './Paragraph.scss';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={`paragraph ${className} `}>{children}</p>
);

export default Paragraph;
