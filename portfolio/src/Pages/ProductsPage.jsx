import ProductsHeader from "./Products/Header.jsx";
import ProductsList from "./Products/ProductsList.jsx";
import Footer from "./Landing/Footer.jsx";
import WhatsApp from "./Landing/Whatsapp.jsx";
import DuplicateList from "./Products/DuplicateList.jsx";

export default function ProductsPage() {
  return (
    <>
      <ProductsHeader />
      <ProductsList />
      <DuplicateList />
      <Footer />
      <WhatsApp />
    </>
  );
}
