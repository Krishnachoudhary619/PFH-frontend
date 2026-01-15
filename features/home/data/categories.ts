export interface Category {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    href: string;
}

export const HOME_CATEGORIES: Category[] = [
    {
        id: "documents",
        title: "Documents",
        subtitle: "Notes, PDFs, assignments",
        image: "/images/categories/documents.jpg",
        href: "/print/documents",
    },
    {
        id: "photos",
        title: "Photos",
        subtitle: "High-quality photo prints",
        image: "/images/categories/photos.webp",
        href: "/print/photos",
    },
    {
        id: "brochures",
        title: "Brochures",
        subtitle: "Marketing & branding",
        image: "/images/categories/brochure-image.jpg",
        href: "/print/brochures",
    },
    {
        id: "flyers",
        title: "Flyers",
        subtitle: "Promotions & handouts",
        image: "/images/categories/flyers-image.jpg",
        href: "/print/flyers",
    },
    {
        id: "business-cards",
        title: "Business Cards",
        subtitle: "Professional identity",
        image: "/images/categories/business-card.webp",
        href: "/print/business-cards",
    },
    {
        id: "calendars",
        title: "Calendars",
        subtitle: "Personal & corporate",
        image: "/images/categories/calendar-image.jpg",
        href: "/print/calendars",
    },
];
