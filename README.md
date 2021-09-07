# Shopee-Api
RestFul Api
Auth
Middleware

## Prepare

- Install modules
```
npm install or yarn install
```
- Run server
```
Npmstart
```
#Detail
- [ Trả về các keyword phổ biến nhất]GET: https://shopee-product.herokuapp.com/api/v1.0/keywords
- [ Trả về detail của keyword]GET: https://shopee-product.herokuapp.com/api/v1.0/keywords/:id
- [ Trả về các sản phẩm theo từ khóa, phân trang ] GET: https://shopee-product.herokuapp.com/api/v1.0/products?key_word={keyword}&limit={limit}&newest={newest}
- [ Trả về detail sản phẩm theo itemid ] GET: https://shopee-product.herokuapp.com/.../products/:itemid
