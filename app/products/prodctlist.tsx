import { use } from "react";

interface productList {

    name: string;
    type: string;
    price:number;
    currency:string;
    isOnStock:boolean;
    image:string

}
type ProductList = productList[]
async function getProducts() {
    // getStaticProps
    const res = await fetch("https://product-app-101-server.vercel.app/api/products");
    return res.json();
  }
  

export default function ProductList() {
    const products:ProductList = use(getProducts());
  return (
    <div>
        { products.map((product:productList) =>
          <div key={product.name}>
            {product.name}
          </div>
        )}
      </div>
  )
}
