class PaymentsController {
    static add(req, res) {
        if(!req.body){
            return res.status(400).send('Datos incompletos');

        }
        res.render('payment-confirmation');
    }
}

module.exports = PaymentsController;