import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      "message": "hello i18n !!",
      "card": {
        "cardHolder": "Card Holder",
        "fullName": "Full Name",
        "expires": "Expires",
        "MM": "MM",
        "YY": "YY"
      },
      "cardForm": {
        "cardNumber": "Card Number",
        "cardName": "Card Name",
        "expirationDate": "Expiration Date",
        "month": "Month",
        "year": "Year",
        "CVV": "CVV",
        "submit": "Submit",
        "invalidCardNumber": "Invalid Card Number"
      }
    },
    pt: {
      "message": "hello i18n !!",
      "card": {
        "cardHolder": "Titular Cartão",
        "fullName": "Nome Completo",
        "expires": "Expira",
        "MM": "MM",
        "YY": "AA"
      },
      "cardForm": {
        "cardNumber": "Numero do Cartão",
        "cardName": "Nome Titular",
        "expirationDate": "Data de Vencimento",
        "month": "Mês",
        "year": "Ano",
        "CVV": "CVV",
        "submit": "Enviar",
        "invalidCardNumber": "Número do Cartão Inválido"
      }
    }

  }
})
