const tailwindcss = require('tailwindcss')


module.exports = {
    content: ['./src/*.js'],
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}