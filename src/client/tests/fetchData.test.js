import 'babel-polyfill'

const { fetchData } = require("../js/fetchData")

test('Data Featching ... ', () => {
    expect(fetchData).toBeDefined();
})