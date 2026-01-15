import {
    Folder,
    Camera,
    FileText,
    Image as ImageIcon,
    File,
    Sheet,
    Presentation,
    IdCard,
} from "lucide-react";

export interface DocumentFileType {
    id: string;
    label: string;
    icon: React.ElementType;
}

export const DOCUMENT_FILE_TYPES: DocumentFileType[] = [
    { id: "all", label: "All Files", icon: Folder },
    { id: "camera", label: "Camera", icon: Camera },
    { id: "pdf", label: "PDF", icon: FileText },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "doc", label: "DOC", icon: File },
    { id: "excel", label: "Excel", icon: Sheet },
    { id: "ppt", label: "PPT", icon: Presentation },
    { id: "id-card", label: "ID Card", icon: IdCard },
];
