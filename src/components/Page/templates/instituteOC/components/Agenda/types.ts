import { EventEntry } from "../../types";

export interface AgendaProps {
  title: string;
  subtitle: string;
  events: EventEntry[];
  subscribeButtonText: string;
  calendarButtonText: string;
}
