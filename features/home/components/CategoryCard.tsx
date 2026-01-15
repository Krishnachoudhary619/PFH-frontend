"use client";

import Image from "next/image";

import { useState } from "react";

import { Category } from "../data/categories";
import { DocumentUploadDialog } from "./DocumentUploadDialog";


interface Props {
  category: Category;
}




export function CategoryCard({ category }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (category.id === "documents") {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="group cursor-pointer overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative h-44 w-full">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {category.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {category.subtitle}
          </p>
        </div>
      </div>

      {category.id === "documents" && (
        <DocumentUploadDialog open={open} onOpenChange={setOpen} />
      )}
    </>
  );
}