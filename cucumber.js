export default {
    default: {
        import: [
            'step-definition/Sales.step.js',
            'step-definition/Receivable.step.js'
        ],
        paths: [
            'features/**/*.feature'
        ]
    }
};