const { default: axios } = require("axios");

const {
    API_KEY,
    ANALYSIS_API,
} = process.env;

const analyse = async(req, res) => {
    const { body: { url } } = req;
    const apiUrl = `${ANALYSIS_API}?key=${API_KEY}&url=${url}&lang=en`
    const respon = await axios.post(apiUrl);
    const results = respon.data;
    res.send(results);
}

module.exports = {
    analyse,
}