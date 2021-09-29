const { handleSubmit } = require('./js/submitHandler');

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', handleSubmit);
})

module.exports = {
    handleSubmit,
};