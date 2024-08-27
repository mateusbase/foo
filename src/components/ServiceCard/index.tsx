export default function ServiceCard({ title, icon }: ServiceCardProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-48 md:w-260 h-full sm:h-48 md:h-260 border-2 border-primary rounded-2xl p-4 opacity-100">
      <img src={icon} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover mb-4" />
      <h3 className="text-primary text-xl font-bold text-center">{title}</h3>
    </div>
  );
}
