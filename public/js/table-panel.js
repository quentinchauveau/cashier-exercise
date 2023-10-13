const app = {
    start() {
        $('#add-order').on('click', this.addOrder.bind(this));
    },

    addOrder() {
        const baseURL = 'http://localhost:3000';
        axios.post(`${baseURL}/tables/addOrder`)
            .then(response => console.log(response));
    },
}
$(document).ready(() => app.start());