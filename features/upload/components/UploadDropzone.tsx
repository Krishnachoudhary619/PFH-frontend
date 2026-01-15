"use client";

interface Props {
  fileType: string;
}

export function UploadDropzone({ fileType }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center">
      <p className="text-gray-600">
        Drag & drop your {fileType} files here
      </p>

      <span className="my-4 text-sm text-gray-400">or</span>

      <button className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90">
        Browse Files
      </button>
    </div>
  );
}
