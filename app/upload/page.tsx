import { UploadHeader } from "@/features/upload/components/UploadHeader";
import { UploadDropzone } from "@/features/upload/components/UploadDropzone";

interface Props {
  searchParams: {
    type?: string;
  };
}

export default function UploadPage({ searchParams }: Props) {
  const fileType = searchParams.type ?? "all";

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <UploadHeader fileType={fileType} />
      <UploadDropzone fileType={fileType} />
    </main>
  );
}
