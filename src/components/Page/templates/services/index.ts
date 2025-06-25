import { DeLifeRoot } from "./deLife";
import { ServicesRoot } from "./root";
import { SingleService } from "./singleService";

export const servicesTemplates = {
  SERVICES_TREATMENTS_DIAGNOSTICS: ServicesRoot,
  SERVICE: SingleService,
  TREATMENT: SingleService,
  DIAGNOSIS: SingleService,
};

export const deLifeTemplates = {
  DE_LIFE: DeLifeRoot,
};
