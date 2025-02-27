import React from "react";
import downloadCardsMock from "./downloadCardsMock";
import DownloadCards from "./components/transparencia/DownloadCards";

const Transparencia: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {Object.entries(downloadCardsMock).map(([date, cards]) => (
        <div key={date} className="mt-20 lg:mt-6">
          <h1 className="mb-11 text-center text-2xl text-primary md:text-left md:text-[40px] lg:mb-7">
            {date}
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <DownloadCards
                key={card.id}
                type={card.type}
                document={card.document}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transparencia;
