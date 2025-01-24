import MainOptionsActions from "@/components/MainOptionsActions";
import PageLayout from "@/components/PageLayout";
import { options } from "@/utils/objectUtils";
import NominateOrPaticipate from "./components/NominateOrPaticipate";

export default function StudyScreen(): JSX.Element {
  const noticiaContent = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet dui quis accumsan. Aenean nisl odio, aliquam et libero posuere, viverra pretium lectus. Cras justo orci, rutrum nec tellus a, vulputate eleifend ligula. Aenean rutrum nisi dui, eget aliquam velit pretium non. Curabitur id nunc et nulla maximus pulvinar et ut urna. Nullam posuere ex a viverra congue. Cras at vestibulum orci, ac bibendum orci. In bibendum tortor at eros tincidunt, quis cursus odio aliquet. Fusce ac ligula quis eros convallis rhoncus. Nam rutrum ligula at tellus tempor, at pharetra mauris dictum. Sed quis dolor consectetur, laoreet arcu ut, tempor est. Praesent bibendum fermentum ipsum id suscipit. Morbi sit amet eros libero.

  Sed placerat maximus tincidunt. Nulla ac lacus metus. Sed sed lorem eros. Sed sollicitudin, nibh sed auctor rutrum, odio enim iaculis ex, nec euismod est enim ut ex. Vivamus iaculis, nibh et viverra pellentesque, ex massa ultricies dui, quis gravida mi metus at neque. Nullam sollicitudin velit id libero gravida, eget fringilla magna varius. Curabitur porta sem id arcu consequat, a placerat arcu posuere. Quisque mattis justo sit amet lobortis hendrerit. Sed viverra imperdiet ligula, vel congue massa aliquet sed.

  Curabitur condimentum auctor massa eget dictum. Fusce non ante at sapien vulputate vestibulum. Nam blandit volutpat ipsum, non fringilla arcu faucibus eu. Suspendisse consequat elit neque, a ultrices nulla faucibus sed. Nam elit velit, maximus non ipsum vel, feugiat mollis mi. Donec in dui mi. Integer nec consectetur arcu, eu pulvinar nunc. Proin mattis imperdiet mollis. Donec lobortis, nulla ac auctor ultrices, nisi neque pretium nisi, ac elementum arcu sapien a justo. Phasellus cursus ullamcorper nisi id congue. Donec id ligula id est elementum rhoncus at et sapien. Suspendisse libero arcu, posuere vitae fermentum nec, rhoncus ut urna. Pellentesque eleifend mauris vitae erat maximus mollis. Vestibulum posuere quis dolor vitae efficitur. Cras sagittis lorem quis bibendum tincidunt.

  Ut dapibus magna tellus. Nunc porta eleifend dolor, eget congue lorem accumsan non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam non urna semper, gravida purus vel, vehicula est. Aliquam et elit est. Vivamus pulvinar rutrum eleifend. Sed suscipit elit ac tincidunt viverra. Integer tempor ornare leo sed pharetra. Pellentesque vehicula tempus magna, vitae dapibus Leo tempor vel. Nunc fringilla sem velit, sed sollicitudin arcu tristique efficitur. Mauris quis tempor nisi. Maecenas venenatis dui sed ante facilisis eleifend. Aliquam ut consectetur lorem, eget mollis urna.

  Quisque egestas varius purus nec sagittis. Vivamus volutpat nibh vel vulputate ornare. Pellentesque consequat, sapien vel auctor pellentesque, nibh dui viverra tortor, vel pretium lacus est sit amet enim. Fusce nisi elit, suscipit sed metus id, rhoncus ultricies leo. Sed et porta tortor. Aenean sed leo fringilla, gravida dolor id, vestibulum diam. Aliquam ac aliquam risus, quis porta dui. Donec non orci vel massa vehicula rutrum. Suspendisse ac quam urna. Nam libero neque, efficitur vitae pulvinar id, congue sollicitudin augue. Suspendisse potenti. Cras euismod cursus dapibus. Fusce a tempus est. Phasellus vehicula ultrices neque.`;

  const paragraphs = noticiaContent
    .trim()
    .replace(/\n+/g, "\n\n")
    .split("\n\n");

  return (
    <main>
      <PageLayout
        title="Estudos clínicos abertos"
        subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
        mainOptions={false}
      >
        <div className="mt-20 flex flex-col items-center">
          <p className="text-3xl text-primary">BGB-11417-201 </p>
          <p className="text-xl text-lightGray">OC Oncoclínicas RJ</p>
        </div>

        <div className="mt-8 flex justify-center">
          <h1 className="text-6xl font-light text-primary">
            Título do estudo clínico publicado
          </h1>
        </div>

        <p className="mt-12 text-2xl text-lightGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          convallis rutrum varius. Vestibulum molestie laoreet dui quis
          accumsan. Aenean nisl odio, aliquam et libero posuere, viverra pretium
          lectus. Cras justo orci, rutrum nec tellus a, vulputate eleifend
          ligula. Aenean rutrum nisi dui, eget aliquam velit pretium non.
          Curabitur id nunc et nulla maximus pulvinar et ut urna. Nullam posuere
          ex a viverra congue. Cras at vestibulum orci, ac bibendum orci. In
          bibendum tortor at eros tincidunt, quis cursus odio aliquet. Fusce ac
          ligula quis eros convallis rhoncus. Nam rutrum ligula at tellus
          tempor, at pharetra mauris dictum. Sed quis dolor consectetur, laoreet
          arcu ut, tempor est. Praesent bibendum fermentum ipsum id suscipit.
          Morbi sit amet eros libero.
        </p>

        <div className="my-14 w-full">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-sm font-normal leading-snug text-lightGray md:text-base lg:text-[22px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </PageLayout>

      <NominateOrPaticipate />
      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
