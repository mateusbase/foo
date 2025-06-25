/* eslint-disable react/no-danger */
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";

interface FaqSectionHomeProps {
  title: string;
  linkText: string;
  path: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FaqSectionHome({
  title,
  linkText,
  path,
  questions,
}: FaqSectionHomeProps): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-foreground px-8 py-16 md:py-10">
      <div className="mx-auto mb-8 w-full max-w-6xl text-center">
        <h1 className="text-2xl font-light text-primary md:text-title-lg md:leading-[60px]">
          {title}
        </h1>
      </div>

      <div className="flex w-full max-w-5xl flex-col items-start justify-center">
        <Accordion
          titleClassName="text-primary text-sm md:text-lg md:font-bold"
          content={questions.map((question) => ({
            title: question.question,
            id: question.question,
            content: (
              <div dangerouslySetInnerHTML={{ __html: question.answer }} />
            ),
          }))}
        />

        {linkText && path && (
          <a href={path}>
            <div className="mt-6 flex w-full justify-start">
              <Button variant="outlined" className="lg:w-[228px]">
                [+] {linkText}
              </Button>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
