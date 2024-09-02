import Counter from "./Counter";

function AgeCounter({
  label,
  description,
  count,
  setCount,
  unitPrice = 0,
  date,
  max_count,
}) {
  return (
    <div className="flex justify-between items-start gap-6">
      <div>
        {label}
        <span className="text-xs ml-1 text-[#71717a]">{description}</span>
        <p className="text-sm text-[#383838]">₹ {unitPrice * count}</p>
      </div>
      <div>
        <Counter
          date={date}
          count={count}
          setCount={setCount}
          max_count={max_count}
        />
      </div>
    </div>
  );
}

export default AgeCounter;
