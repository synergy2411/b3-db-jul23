# to create react project

- npx create-react-app awesome-app [--template typescript]

# to install bootstrap

- npm install bootstrap
- import "bootstrap/dist/css/bootstrap.min.css"; // index.tsx

# form Validation

- formik
- react-hook-form
- yup

# useEffect Flavours -

1. useEffect(cb) : fire on every rendering of component
2. useEffect(cb, []) : (componentDidMount) fire ONLY at initial rendering of component
3. useEffect(cb, [Dependency]) : (componentDidUpdate) fire at initial rendering as well as whenever the dependency changes
4. useEffect(cb => cleanUpFn, [Dependency]) : (componentWillUnmount)
   > cb fire at initial rendering of component
   > dependency will change
   > cleanup will fire
   > cb will fire
   > cleanup will also fire just before the component is destroyed
