/// <reference types="Cypress"/>
//import 'cypress-soft-assertions';
import 'cypress-iframe';


const SearchHotelFun = require("../Locators/SearchHotel.json");
import { SearchHotelClass } from "../Pages/SearchPage";
import { Login } from "../Utils/loginUtils";
import { BookingHotelClass } from "../Pages/BookedPage";
const BookingHotelForm = new BookingHotelClass();

const SearchHotelForm = new SearchHotelClass();

describe("Search Hotel", () => {
    beforeEach(() => {
        Login();
    });

    it("TC04: User can Search Hotel For Booking", () => {
        SearchHotelForm.LocationSelect();
        SearchHotelForm.HotelsSelect();
        SearchHotelForm.RoomType();
        SearchHotelForm.NoOfRooms();
        SearchHotelForm.CheckIn();
        SearchHotelForm.CheckOut();
        SearchHotelForm.AdultsRoom();
        SearchHotelForm.ChildRoom();
        SearchHotelForm.SearchBtn();
        
        // HOTEL SELECT PAGE
        SearchHotelForm.HotelSelectRadioBtn();
        SearchHotelForm.ContinueBtn();
        
        // NEXT PAGE
        SearchHotelForm.FirstName();
        SearchHotelForm.LasttName();
        SearchHotelForm.BillingAddress();
        SearchHotelForm.CCno();
        SearchHotelForm.CCType();
        SearchHotelForm.ExpiryYear();
        SearchHotelForm.ExpiryMonth();
        SearchHotelForm.CVVno();
        SearchHotelForm.BookBtn();
        
        cy.get('#order_no', { timeout: 10000 }).invoke('val').then((retrievedOrderID) => {
            cy.log(`Order Number: ${retrievedOrderID}`);
            Cypress.env('orderID', retrievedOrderID);
        });
    });

    it("TC06: User can View Booked Hotel and Cancel the Order", () => {
        
            const orderID = Cypress.env('orderID');
            if (orderID) {
                cy.log(`Order ID exists in Cypress environment: ${orderID}`);
                BookingHotelForm.BookedHotel();
                BookingHotelForm.SearchOrder(orderID);

                // Log the number of checkboxes
                cy.xpath('//input[@name="ids[]"]').should('be.visible').its('length').then((length) => {
                cy.log('Total Search Result: ' + length);
                expect(length).to.equal(1);
                })

                // Log the text of the element
                cy.xpath('//label[@id="search_result_error"]').invoke('text').then((text) => {
                cy.log('Text of the element:', text);
                });

                cy.xpath('//input[@name="ids[]"]').click();
                BookingHotelForm.CancelBtn();


                // Click OK from the Alert popup
                cy.on('window:confirm', (str) => {
                cy.log('Alert dialog message:', str);      // Log the message displayed in the alert dialog
                return true;                               // return false; // To Click Cancel
                });

            } else {
                cy.log('Order ID does not exist in Cypress environment');
                throw new Error('Order ID does not exist in Cypress environment');
            }
        });
    });







// it.skip("TC03: User can Reset the Form after Filling", () => {
//     SearchHotelForm.LocationSelect();
//     SearchHotelForm.HotelsSelect();
//     SearchHotelForm.RoomType();
//     SearchHotelForm.NoOfRooms();
//     SearchHotelForm.CheckIn();
//     SearchHotelForm.CheckOut();
//     SearchHotelForm.AdultsRoom();
//     SearchHotelForm.ChildRoom();
//     SearchHotelForm.ResetBtn();

//     cy.xpath(SearchHotelFun.SearchHotelLocators.LocationLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.HotelsLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.RoomTypeLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.NoOfRoomsLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.CheckInLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.CheckOutLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.AdultsLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });
//     cy.xpath(SearchHotelFun.SearchHotelLocators.ChildrenLoc).then($el => {
//         cy.softAssert($el.text().includes(''), true, 'The element is Empty');
//     });

//     cy.assertSoftAssertions();
// });