export type TicketItem = {
  id: string;
  title: string;
  imageUrl: string | null;
  kind: string;
  price?: number | null;
};
