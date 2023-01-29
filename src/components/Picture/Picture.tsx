interface PictureProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

const Picture = ({ src, alt, style, className }: PictureProps) => (
  <img src={src} alt={alt} className={className} style={style} />
);

export default Picture;
