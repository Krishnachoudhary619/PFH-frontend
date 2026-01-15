interface Props {
  fileType: string;
}

const LABEL_MAP: Record<string, string> = {
  all: "All Files",
  pdf: "PDF",
  doc: "DOC",
  excel: "Excel",
  ppt: "PPT",
  gallery: "Gallery",
  camera: "Camera",
  "id-card": "ID Card",
};

export function UploadHeader({ fileType }: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Upload {LABEL_MAP[fileType] ?? "Files"}
      </h1>

      <p className="mt-2 text-gray-600">
        Choose files to start your print order.
      </p>
    </div>
  );
}
