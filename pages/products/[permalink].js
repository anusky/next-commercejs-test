import commerce from "../../lib/commerce";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

const ProductPage = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
      <picture>
        <img src={product.media.source} alt={product.name} />
      </picture>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
};
export default ProductPage;
