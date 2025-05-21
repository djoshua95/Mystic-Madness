import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import { Footer, Header } from "@/components";
import styles from "@/css/home/page.module.css";
import headerStyles from "@/css/home/header.module.css";
import heroStyles from "@/css/home/hero.module.css";
import categoriesStyles from "@/css/home/categories.module.css";
import productsStyles from "@/css/home/products.module.css";
import promoStyles from "@/css/home/promo.module.css";
import newsletterStyles from "@/css/home/newsletter.module.css";
import featuresStyles from "@/css/home/features.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Top announcement bar */}
      <div className={headerStyles.announcement}>
        Free shipping on orders over $70.000 | Use code WELCOME10 for 10% off
        your first order
      </div>

      {/* Header */}
      <Header />

      <main>
        {/* Hero section */}
        <section className={heroStyles.hero}>
          <div className={heroStyles.heroImage}>
            <Image
              src="/placeholder.svg?height=500&width=1920"
              alt="Hero image"
              width={1920}
              height={500}
              priority
            />
            <div className={heroStyles.overlay} />
            <div className={heroStyles.content}>
              <div className={heroStyles.contentInner}>
                <h1 className={heroStyles.title}>Summer Collection 2025</h1>
                <p className={heroStyles.description}>
                  Discover the latest trends and styles for the summer season.
                </p>
                <button className={heroStyles.button}>Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the content remains unchanged */}
        {/* Categories */}
        <section className={`container ${categoriesStyles.section}`}>
          <h2 className={categoriesStyles.title}>Shop by Category</h2>
          <div className={categoriesStyles.grid}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className={categoriesStyles.category}
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={300}
                  height={180}
                />
                <div className={categoriesStyles.categoryOverlay} />
                <div className={categoriesStyles.categoryContent}>
                  <h3 className={categoriesStyles.categoryName}>
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className={productsStyles.section}>
          <div className="container">
            <div className={productsStyles.header}>
              <h2 className={productsStyles.title}>Featured Products</h2>
              <Link href="#" className={productsStyles.viewAll}>
                View all{" "}
                <ChevronRight size={16} style={{ marginLeft: "4px" }} />
              </Link>
            </div>
            <div className={productsStyles.grid}>
              {products.map((product) => (
                <div key={product.id} className={productsStyles.card}>
                  <div className={productsStyles.imageContainer}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                    />
                    {product.isNew && (
                      <div className={productsStyles.badge}>New</div>
                    )}
                    <button className={productsStyles.wishlistButton}>
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className={productsStyles.content}>
                    <h3 className={productsStyles.name}>{product.name}</h3>
                    <p className={productsStyles.category}>
                      {product.category}
                    </p>
                    <p className={productsStyles.price}>
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={productsStyles.footer}>
                    <button className={productsStyles.addButton}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className={`container ${promoStyles.section}`}>
          <div className={promoStyles.banner}>
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Promotional banner"
              width={1200}
              height={300}
            />
            <div className={promoStyles.overlay} />
            <div className={promoStyles.content}>
              <div className={promoStyles.inner}>
                <h2 className={promoStyles.title}>Up to 50% Off Summer Sale</h2>
                <p className={promoStyles.description}>
                  {"Limited time offer. Shop now before it's gone!"}
                </p>
                <button className={promoStyles.button}>Shop Sale</button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={newsletterStyles.section}>
          <div className={`container ${newsletterStyles.container}`}>
            <h2 className={newsletterStyles.title}>Join Our Newsletter</h2>
            <p className={newsletterStyles.description}>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className={newsletterStyles.form}>
              <input
                type="email"
                placeholder="Your email address"
                className={newsletterStyles.input}
              />
              <button className={newsletterStyles.button}>Subscribe</button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={`container ${featuresStyles.section}`}>
          <div className={featuresStyles.grid}>
            {features.map((feature) => (
              <div key={feature.title} className={featuresStyles.feature}>
                <div className={featuresStyles.iconContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.paths.map((p, index) => (
                      <path key={feature.title + index} d={p} />
                    ))}
                  </svg>
                </div>
                <h3 className={featuresStyles.title}>{feature.title}</h3>
                <p className={featuresStyles.description}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Features data
const features = [
  {
    title: "Free Shipping",
    description: "On all orders over $50",
    paths: ["M5 12h14", "M12 5v14"],
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"],
  },
  {
    title: "Easy Returns",
    description: "30 days return policy",
    paths: ["M21 10H3", "M21 6H3", "M21 14H3", "M21 18H3"],
  },
];

// Sample data
const categories = [
  {
    name: "Women",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Men",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Footwear",
    image: "/placeholder.svg?height=300&width=300",
  },
];

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "Women",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Men",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    category: "Women",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 5,
    name: "Canvas Sneakers",
    category: "Footwear",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "Men",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 7,
    name: "Oversized Sunglasses",
    category: "Accessories",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 8,
    name: "Striped Button-Up Shirt",
    category: "Men",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
];
