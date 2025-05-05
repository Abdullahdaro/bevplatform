module.exports = {
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    endOfLine: 'auto',
    bracketSpacing: true,
    arrowParens: 'always',
    // Additional helpful options
    jsxSingleQuote: false,
    bracketSameLine: false,
    quoteProps: 'as-needed',
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    embeddedLanguageFormatting: 'auto',

    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.js',
  };