import { TopicsCoveredSectionProps } from "./types";

export default function TopicsCoveredSection({
  coveredTopics,
}: TopicsCoveredSectionProps): JSX.Element {
  return (
    <div>
      <h1 className="-ml-1 mb-4 text-2xl text-primary md:ml-0 lg:mt-24 lg:text-title-lg">
        Temas abordados
      </h1>
      <ul className="list-inside list-disc space-y-2">
        {coveredTopics?.map((topic) => (
          <li
            key={topic.name}
            className="text-sm font-medium text-lightGray lg:text-xl"
          >
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
