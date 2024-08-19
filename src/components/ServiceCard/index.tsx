export default function ServiceCard({ title, icon }: ServiceCardProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-48 md:w-40 lg:w-64 h-full sm:h-48 md:h-40 lg:h-64 border-2 border-primary rounded-2xl p-4 opacity-100">
      <img src={icon} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover mb-4" />
      <h3 className="text-primary text-lg sm:text-xl font-semibold text-center">{title}</h3>
    </div>
  );
}
