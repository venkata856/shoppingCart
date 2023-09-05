import "./products.css";
import { useLoaderData, useNavigation } from "react-router-dom";

export default function HomePage() {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <div className="loader"></div>;
  }
  return (
    <>
      <div className="homePage">
        {data.map((phone) => (
          <div className="display" key={phone.id}>
            <img src={phone.thumbnail} alt="some data"></img>
            <h5 className="title">{phone.title}</h5>
            <h6 className="price">$ {phone.price}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export async function homePageDataLoader() {
  const resp = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const data = await (await resp.json()).products;
  return data;
}
