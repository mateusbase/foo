import { EveryThingCancerProps } from "./everythingCancer/types";
import { eventsTemplates } from "./events";
import { EventsRootProps, SingleEventRootProps } from "./events/types";
import { findADoctorTemplates } from "./findADoctor";
import { FindADoctorRootProps } from "./findADoctor/types";
import { glossaryTemplates } from "./glossary";
import { homeTemplates } from "./home";
import { HomeRootProps } from "./home/types";
import { physicianHomeTemplates } from "./physicianHome";
import { PhysicianHomeRootProps } from "./physicianHome/types";
import {
  clippingTemplates,
  pressTemplates,
  releasesTemplates,
  singleClippingTemplates,
} from "./press";
import {
  ClippingRootProps,
  PressRootProps,
  ReleasesRootProps,
  SingleClippingRootProps,
} from "./press/types";
import { appointmentsScheduleTemplates } from "./scheduleYourConsultation";
import { AppointmentsScheduleRootProps } from "./scheduleYourConsultation/types";
import { deLifeTemplates, servicesTemplates } from "./services";
import {
  DeLifeRootProps,
  ServicesRootProps,
  SingleServiceRootProps,
} from "./services/types";
import { talkToUsTemplates } from "./talkToUs";
import { TalkToUsRootProps } from "./talkToUs/types";
import { everyThingCancerTemplates } from "./everythingCancer";
import { OcJournalRootProps, SingleJournalRootProps } from "./ocJournal/types";
import { GlossaryRootProps } from "./glossary/types";
import { HealthProvidersRootProps } from "./healthProviders/types";
import { healthProvidersTemplates } from "./healthProviders";
import {
  SingleVideoRootProps,
  VideosGalleryRootProps,
} from "./videosGallery/types";
import { videoGalleryTemplates } from "./videosGallery";
import {
  CancerTypeProps,
  CancerTypesProps,
} from "./everythingCancer/cancerTypes/types";
import { cancerTypesTemplates } from "./everythingCancer/cancerTypes";
import { AppRootProps, SingleAppRootProps } from "./app/type";
import { FindAUnitsRootProps, SingleUnitRootProps } from "./findAUnit/type";
import { findAUnitsTemplates, singleUnitTemplates } from "./findAUnit";
import { ProjectsAndSponsorshipsRootProps } from "./projectsAndSponsorships/types";
import { projectAndSponsorshipsTemplates } from "./projectsAndSponsorships";
import { appTemplates } from "./app";
import { vaccinesTemplates } from "./vaccines";
import { VaccinesRootProps } from "./vaccines/type";
import { franchiseTemplates } from "./franchise";
import { FranchiseRootProps } from "./franchise/type";
import {
  FellowshipRootsProps,
  GetOnProRootsProps,
  InstituteOcRootProps,
  ResidencyRootsProps,
} from "./instituteOC/types";
import {
  fellowshipTemplates,
  getOnProTemplates,
  instituteOcTemplates,
  residencyTemplates,
} from "./instituteOC";
import { DynamicTemplateProps } from "./dynamic/types";
import { dynamicTemplates } from "./dynamic";
import {
  ClinicalResearchProps,
  ClinicResearchFAQRootProps,
  ClinicResearchStudiesRootProps,
  CommitteesRootProps,
  SingleClinicalSearchStudyRootProps,
} from "./clinicalResearch/type";
import {
  clinicalResearchTemplates,
  clinicResearchFAQTemplates,
  clinicResearchStudiesTemplates,
  committeesTemplates,
} from "./clinicalResearch";
import { CampaignsRootProps } from "./campaigns/types";
import { campaignsTemplates } from "./campaigns";
import { SpecialtiesRootProps } from "./specialties/types";
import { specialtiesTemplates } from "./specialties";
import { NewsRootProps } from "./news/types";
import { newsTemplates } from "./news";
import {
  molecularThursdaysTemplates,
  precisionMedicineTemplates,
} from "./precisionMedicine";
import {
  MolecularThursdaysRootProps,
  PrecisionMedicineRootProps,
} from "./precisionMedicine/types";
import { FAQTemplates } from "./FAQ";
import { FAQRootProps } from "./FAQ/types";
import { workWithUsTemplates } from "./workWithUs";
import { ocJournalTemplates, singleJournalTemplates } from "./ocJournal";
import { WorkWithUsRootProps } from "./workWithUs/types";

export type TemplatePropsMap = {
  CONTACT_US: TalkToUsRootProps;
  APPOINTMENT_SCHEDULE: AppointmentsScheduleRootProps;
  HOME: HomeRootProps;
  PHYSICIAN_HOME: PhysicianHomeRootProps;
  PHYSICIAN_SEARCH: FindADoctorRootProps;
  OC_PRESS: PressRootProps;
  OC_EVENT: EventsRootProps;
  EVENT: SingleEventRootProps;
  SERVICES_TREATMENTS_DIAGNOSTICS: ServicesRootProps;
  EVERYTHING_ABOUT_CANCER: EveryThingCancerProps;
  SERVICE: SingleServiceRootProps;
  TREATMENT: SingleServiceRootProps;
  DIAGNOSIS: SingleServiceRootProps;
  OC_JOURNAL: OcJournalRootProps;
  PRESS_RELEASES: ReleasesRootProps;
  UNITS: FindAUnitsRootProps;
  GLOSSARY: GlossaryRootProps;
  HEALTH_PROVIDERS: HealthProvidersRootProps;
  VIDEO_GALLERY: VideosGalleryRootProps;
  CANCER_TYPES: CancerTypesProps;
  CANCER_TYPE: CancerTypeProps;
  APP_OC: AppRootProps;
  APP_TERMS: SingleAppRootProps;
  PARTNERSHIPS_AND_SPONSORS: ProjectsAndSponsorshipsRootProps;
  VACCINES: VaccinesRootProps;
  FRANCHISE: FranchiseRootProps;
  DE_LIFE: DeLifeRootProps;
  OC_INSTITUTE: InstituteOcRootProps;
  INSTITUTE_GET_ON_PRO: GetOnProRootsProps;
  DYNAMIC: DynamicTemplateProps;
  RESIDENCY: ResidencyRootsProps;
  CLINIC_RESEARCH: ClinicalResearchProps;
  CAMPAIGNS: CampaignsRootProps;
  INSTITUTE_FELLOWSHIP: FellowshipRootsProps;
  PHYSICIAN_SPECIALTIES: SpecialtiesRootProps;
  NEWS: NewsRootProps;
  COMMITTEES: CommitteesRootProps;
  GALLERY_VIDEO: SingleVideoRootProps;
  PRECISION_MEDICINE: PrecisionMedicineRootProps;
  FAQ: FAQRootProps;
  UNIT: SingleUnitRootProps;
  WORK_OPPORTUNITIES: WorkWithUsRootProps;
  PRESS_ARTICLES: ClippingRootProps;
  MOLECULAR_THURSDAYS: MolecularThursdaysRootProps;
  CLINIC_RESEARCH_STUDIES: ClinicResearchStudiesRootProps;
  CLINIC_RESEARCH_FAQ: ClinicResearchFAQRootProps;
  SINGLE_PRESS_ARTICLE: SingleClippingRootProps;
  CLINIC_RESEARCH_STUDY: SingleClinicalSearchStudyRootProps;
  JOURNAL_ARTICLE: SingleJournalRootProps;
};

const templates: {
  [K in keyof TemplatePropsMap]: React.FC<TemplatePropsMap[K]>;
} = {
  ...eventsTemplates,
  ...glossaryTemplates,
  ...talkToUsTemplates,
  ...pressTemplates,
  ...appointmentsScheduleTemplates,
  ...homeTemplates,
  ...physicianHomeTemplates,
  ...findADoctorTemplates,
  ...servicesTemplates,
  ...everyThingCancerTemplates,
  ...ocJournalTemplates,
  ...releasesTemplates,
  ...findAUnitsTemplates,
  ...glossaryTemplates,
  ...healthProvidersTemplates,
  ...videoGalleryTemplates,
  ...cancerTypesTemplates,
  ...appTemplates,
  ...projectAndSponsorshipsTemplates,
  ...vaccinesTemplates,
  ...franchiseTemplates,
  ...deLifeTemplates,
  ...instituteOcTemplates,
  ...getOnProTemplates,
  ...dynamicTemplates,
  ...residencyTemplates,
  ...clinicalResearchTemplates,
  ...campaignsTemplates,
  ...fellowshipTemplates,
  ...specialtiesTemplates,
  ...newsTemplates,
  ...committeesTemplates,
  ...precisionMedicineTemplates,
  ...FAQTemplates,
  ...singleUnitTemplates,
  ...workWithUsTemplates,
  ...clippingTemplates,
  ...molecularThursdaysTemplates,
  ...clinicResearchStudiesTemplates,
  ...clinicResearchFAQTemplates,
  ...singleClippingTemplates,
  ...singleJournalTemplates,
};

export type Template = keyof typeof templates;

interface RenderTemplateProps<T extends Template> {
  type: T;
  id?: string;
  data: TemplatePropsMap[T]["data"];
  breadcrumbs: TemplatePropsMap[T]["breadcrumbs"];
}

export function RenderTemplate<T extends Template>(
  props: RenderTemplateProps<T>,
): JSX.Element {
  const { type } = props;

  const Component = templates[type] as React.FC<TemplatePropsMap[T]>;

  return <Component {...(props as TemplatePropsMap[T])} />;
}
