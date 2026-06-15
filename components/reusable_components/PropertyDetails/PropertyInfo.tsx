export interface PropertyInfoProps {
  name: string;
  location: string;
}

export default function PropertyInfo({ name, location }: PropertyInfoProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      {/* Figma: title 24px / 700 (#000), location 18px / 400 (#6C6C6C) */}
      <h2 className="text-2xl font-bold text-foreground">{name}</h2>
      <p className="text-lg font-normal text-muted-foreground">{location}</p>
    </div>
  );
}
