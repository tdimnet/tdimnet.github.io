function Component({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      className="absolute left-0 w-full h-96 object-cover"
      alt={alt}
    />
  );
}

export default Component;
