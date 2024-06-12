/// <reference types="Cypress"/>
import { Login } from "../Utils/loginUtils";
import { BookingHotelClass } from "../Pages/BookedPage";

const BookingHotelForm = new BookingHotelClass();

describe("Booking Hotel", () => {
    before(() => {
        Login();
    });
    it("TC06: User can View Booked Hotel and Cancel the Order", () => {
        cy.then(() => {
            const orderID = Cypress.env('orderID');
            if (orderID) {
                cy.log(`Order ID exists in Cypress environment: ${orderID}`);
                BookingHotelForm.BookedHotel();
                BookingHotelForm.SearchOrder(orderID);
            } else {
                cy.log('Order ID does not exist in Cypress environment');
                throw new Error('Order ID does not exist in Cypress environment');
            }
        });
    });

});
