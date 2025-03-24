import { topicsCovered } from "../../topicsMock";

export default function TopicsCoveredSection(): JSX.Element {
  return (
    <div>
      <h1 className="-ml-1 mb-4 text-2xl text-primary md:ml-0 lg:mt-24 lg:text-title-lg">
        Temas abordados
      </h1>
      <ul className="list-inside list-disc space-y-2">
        {topicsCovered.map((topic) => (
          <li
            key={topic.id}
            className="text-sm font-medium text-lightGray lg:text-xl"
          >
            {topic.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
