import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/header/product/product-list";

import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProduct = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProduct} title="New list arrival" />
    </>
  );
};

export default HomePage;
