function H2({ color = "[#383838]", className = "", children }) {
  return (
    <h2
      className={`mb-12 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold text-center md:text-left text-${color} ${className}`}
    >
      {children}
    </h2>
  );
}

export default H2;
