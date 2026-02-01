import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <ProductCard
        image="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-3-scaled.jpg"
        name="Ronaldo"
        price={70000000}
      />

      <ProductCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BEyGNxXtr_7w8z-sVo0SushqWzwSvB6xiQ&s"
        name="Sản phẩm B"
        price={200}
      />
    </div>
  );
}

export default App;