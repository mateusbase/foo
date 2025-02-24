export interface IUnitsAndTreatmentCard {
  id: number;
  icon: string;
  title?: string;
  text: string;
}

const unitsAndTreatmentsMock: IUnitsAndTreatmentCard[] = [
  {
    id: 1,
    text: "145 unidades",
    icon: "/assets/images/oc-franquia/units-icons/Mask group.svg",
  },
  {
    id: 2,
    text: "tratamentos realizados em 2023",
    icon: "/assets/images/oc-franquia/units-icons/Mask group (1).svg",
    title: "635 mil",
  },
];

export default unitsAndTreatmentsMock;
