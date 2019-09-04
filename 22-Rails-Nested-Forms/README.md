# Rails Nested Forms

- Steps:
    - Add `accepts_nested_attributes_for {{child model}}` to the parent model
    - Add to strong_params of parent model
    - Add to controller `@cars = @dealership.cars.build`
    
## Code Challenge
- Nested Associations
- Forms in general, using params
- Overview of folder structure
- Routing, both resources and custom routes