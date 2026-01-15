import { HOME_CATEGORIES } from "../data/categories";
import { CategoryCard } from "./CategoryCard";

export function CategoryGrid() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What would you like to print?
        </h2>

        <p className="mt-2 max-w-xl text-gray-600">
          Choose from our most popular print products.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
