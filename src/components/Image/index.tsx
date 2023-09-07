function Component({
  alt,
  css,
  src,
}: {
  src: string;
  alt: string;
  css?: string;
}) {
  return <img alt={alt} className={css} src={src} loading="lazy" />;
}

export default Component;
