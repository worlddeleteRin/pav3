### Tips about product variants

on [Ozon](https://ozon.ru) product variants on product detail page are stored in block-like style with all possible variations

** A big luck ** for me I found a product with a *combinations bug*. [link to product](https://www.ozon.ru/product/tsvetnaya-penka-muss-moya-prelest-tsarevna-rybka-200-ml-tsvetnaya-penka-muss-moya-prelest-160931371/)
So, that product don't have all combinations between it colors and structure variants. 
So, when you click on "blue" color, it jumps automatically on variant, that has structure variant with that color. 
### What conclusions can be made
Product dont need to have **all** variants combinations for its variants and related variants attributes.
### 
For example, if we have different product variants for 
attribute **color** with values: **red,green,blue**, and attribute **size** with values **small, medium, large**, it is acceptebly to create variations like:
T-Shirt--red--small
T-Shirt-green--medium
T-Shirt-green--large
T-Shirt-blue-large

So, when user will click on **red color** it will automatically choose **small size** , because it is only variation, that has red color. After that, when user will choose **large size** it will jump from red color to green/blue (one of them), because with large size there is no variation with red color, only with green and blue.

### Navigation to product variant on attribute variant click
- Maybe, client side already know all variation combinations, and, when user click on **large** attribute value, it link to that product variation url
- ? But, how does it know it's url? With **large** size it is2 combinations with color **green,blue**
- ? It randomly choose between variants, that pass the *rule* of attribute variants search and link to it? 
- ? And, when, for example, search of variation **large--red** didn't find any of variations, it randomly choose any variation with **large** attribute value?


### Questions
- How to navigate to specific product variant **(unique url)**, when user click on variant attribute?

