import { Home } from "@/components";

const { Categories, Features, Hero, Newsletter, Products, PromotionalBanner } =
  Home;

export default function MainPage() {
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
