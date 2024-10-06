import ScheduleYourConsultationScreen from "@/templates/ScheduleYourConsultationScreen";
import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";

const ScheduleYourConsultation: NextPageWithLayout = () => {
  return (
    <Page
      title="Encontre um Médico"
      description="Oncoclínicas - Encontre um Médico"
    >
      <ScheduleYourConsultationScreen />
    </Page>
  );
};

export default ScheduleYourConsultation;
