import { ClinicResearchStudiesRoot } from "./clinicResearchStudies";
import { CommitteesRoot } from "./committees";
import ClinicalResearchFAQTemplateRoot from "./FAQ";
import { ClinicalResearchRoot } from "./root";
import { SingleClinicalSearchStudyRoot } from "./singleClinicalSearchStudy";

export const clinicalResearchTemplates = {
  CLINIC_RESEARCH: ClinicalResearchRoot,
};

export const committeesTemplates = {
  COMMITTEES: CommitteesRoot,
};

export const clinicResearchStudiesTemplates = {
  CLINIC_RESEARCH_STUDIES: ClinicResearchStudiesRoot,
  CLINIC_RESEARCH_STUDY: SingleClinicalSearchStudyRoot,
};

export const clinicResearchFAQTemplates = {
  CLINIC_RESEARCH_FAQ: ClinicalResearchFAQTemplateRoot,
};
