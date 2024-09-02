function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 justify-items-stretch items-stretch">
      <img src={images[0]} className="object-cover rounded-lg" />
      <img
        src={images[1]}
        className="object-cover rounded-lg col-span-2 row-span-2"
      />
      <img src={images[2]} className="object-cover rounded-lg" />
    </div>
  );
}

export default ImageGrid;
