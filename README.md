# stokify

The goal of this project is to store stock transactions and calculate the total amount of profit/loss for a certain period. The project also supports searching and sorting functions.

# TODOS

- Fixing existing functions (jump to home url using history.push).
- Fixing some issues with converting price to decimals (there is some rounding errors that need to be fixed). 
- Use redux-thunk and axios to connect to remove API (or mock API), especially populate initial state in ComponentDidMount() lifecycle event. -> require at lease a mock server (will write one).
- Styling components using Sass.
- Depending on the API, introduce infinite-scroll to add better user experience.
