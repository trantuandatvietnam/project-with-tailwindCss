module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {},
        colors: {
            orange: {
                F8: '#F85A47',
                F9: '#FF9900',
            },
            gray: {
                31: '#31353B',
                '31B': '31353B',
                DA: '#DADADA',
            },
            violet: {
                BD: '#BDCCFF',
            },
            transparent: 'transparent',
        },
        gridTemplateColumns: {
            work: '1fr auto 1fr auto 1fr',
            2: 'repeat(2, 1fr)',
        },
    },
    plugins: [],
};
