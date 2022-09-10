interface PictureProps {
  src: string;
  alt: string;
  className?: string;
}

const Picture = ({ src, alt, className }: PictureProps) => (
  <img src={src} alt={alt} className={className} />
);

export default Picture;
