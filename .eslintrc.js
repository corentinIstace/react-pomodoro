module.exports = {
    extends: "@becode",
    rules: {
        "react/jsx-uses-react": 0,
        "react/react-in-jsx-scope": 0,
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
};
