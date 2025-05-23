import { Home as HomeComponents } from "@/components";

const { Categories, Features, Hero, Newsletter, Products, PromotionalBanner } =
  HomeComponents;

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <PromotionalBanner />
      <Newsletter />
      <Features />
    </>
  );
}
