//type
interface IProps {
  text?: string;
  width?: string;
  fontSize?: string;
  className?: string;
}

// --------------------------------------
export default function TextUnderLine({
  text,
  width = "30%",
  fontSize = "text-1xl",
  className = "",
}: IProps) {
  return (
    <div className={`inline-block `}>
      <span
        className={` text-primary! inline-block w-fit transition-colors duration-200 ease-in-out ${fontSize} ${className}`}
      >
        {text}
        <div style={{ width }} className="h-0.75 bg-secondary mt-1 mb-2" />
      </span>
    </div>
  );
}
