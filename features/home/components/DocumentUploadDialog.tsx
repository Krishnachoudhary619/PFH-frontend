"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DOCUMENT_FILE_TYPES } from "../data/documentFileTypes";
import { FileTypeCard } from "./FileTypeCard";
import { useRouter } from "next/navigation";


interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocumentUploadDialog({ open, onOpenChange }: Props) {
  const router = useRouter();

const handleSelect = (type: string) => {
  onOpenChange(false);
  router.push(`/upload?type=${type}`);
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Upload files to order printouts
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DOCUMENT_FILE_TYPES.map((fileType) => (
            <FileTypeCard
              key={fileType.id}
              fileType={fileType}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
