const BookedHotelFun = require("../Locators/Booking.json");

export class BookingHotelClass {
    BookedHotel() {
        cy.xpath(BookedHotelFun.BookingLocators.BookedLoc).click();
    }

    SearchOrder(orderID) {
        cy.log(`Searching for Order ID: ${orderID}`);
        cy.xpath(BookedHotelFun.BookingLocators.SearchOrderLoc).type(orderID);
    }
}
