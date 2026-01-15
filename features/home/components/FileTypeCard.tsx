import { DocumentFileType } from "../data/documentFileTypes";

interface Props {
  fileType: DocumentFileType;
  onSelect: (id: string) => void;
}

export function FileTypeCard({ fileType, onSelect }: Props) {
  const Icon = fileType.icon;

  return (
    <button
      onClick={() => onSelect(fileType.id)}
      className="flex flex-col items-center justify-center rounded-xl border bg-white p-4 transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>

      <span className="mt-3 text-sm font-medium text-gray-800">
        {fileType.label}
      </span>
    </button>
  );
}
