function Component({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      className="absolute left-0 w-full h-80 md:h-[500px] 2xl:h-[700px] object-cover object-top"
      alt={alt}
    />
  );
}

export default Component;
