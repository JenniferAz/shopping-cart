# Project structure

The source code is located in /src/app. The project is mainly divided into:

- Models: classes which represent the data to work with
- Providers: services to handle the data globally
- Components: small and reusable pieces of layouts and logic
- Pages: views composed by components which handle data trough services

## Data set service

It contains instances of the available products and the pricing rules. New products and rules can be added there. 

[*IMPORTANT*] design decision for the new rules:

- The product codes array attribute references the products that are involved in a specific offer. 
  For instance, for a "free mug purchasing a T-Shirt and a Cap offer" the three product codes should be included in the array 
  (see rule #2), so that every time one of the involved products is scanned, then the rule will be executed to check if 
  the discount is applicable having into account the rest of the cart products. However, for a "2x1 cap offer" only CAP code 
  should be included (see rule #0) and for a "2x1 mug offer" another rule should be created. If MUG code were added to the product 
  codes array in the previous offer, it would be considered that any time there were an even number of products from the array, 
  then one of them would be free (it would not considerate the products as separate ones).

- Since new rules could come up over time, I decided to separate the logic for computing each discount from the checkout class so 
  it can be more modular and the checkout class will not become a monster. That is why the Rule model has a function as attribute to 
  specify the logic to compute the discount. The idea (for future improvements) would be having classes for the most common rules, 
  such as 2x1 which extend Rule class and have by default the function for discount computations. The instances in data set service 
  would look like:

                `new 2x1('2x1 Cap offer', ['CAP']);
                 new 2x1('2x1 Mug offer', ['MUG']);
                 new bulk(3, 'x3 T-Shirt offer', ['TSHIRT'])`

## Cart service

It stores and handles the instance of the checkout, which is returned as an observable to the pages and components in order to 
update the dependent views automatically with any data change for consistency matters.

## Cart page

It is composed by a product list component and an order summary component. The product list component is composed by product components.
For future improvements, the buttons and input for increasing and decreasing could also be isolated as a component. Note that the input 
for the product quantity is disabled and only the buttons work. That is a decision I made because in the requirements the scan method for 
the checkout class had to receive only one product.

The product component communicates with its father, product list component, and this one with its father, the cart page,
every time a product is added or removed. That way, the components are kept as reusable pieces and the main logic is in the page,
which access to the cart service to update the data and get the new one. The inputs that the children components receive from their father
are automatically updated and so is the view when the cart page receives the new data coming from the observable.

## indexes

For each main folder specified above there is an index file so that the imports in external files are arranged together and look cleaner.

## Tests

- The folder e2e contains one example of an e2e test applied to the cart page.
- Each component has a spec file with very basic tests for the creation.
