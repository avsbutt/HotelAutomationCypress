const SearchHotelFun=require("../Locators/SearchHotel.json")

export class SearchHotelClass{
    SearchBtn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.SearchBtnLoc).click();
    }
    ResetBtn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.ResetBtnLoc).click()
    }
    LocationSelect(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.LocationLoc).select('Paris')
        cy.xpath(SearchHotelFun.SearchHotelLocators.LocationLoc).should('have.value', 'Paris')
        cy.wait(300)
    }
    HotelsSelect(){
       cy.xpath(SearchHotelFun.SearchHotelLocators.HotelsLoc).select('Hotel Hervey')
       cy.xpath(SearchHotelFun.SearchHotelLocators.HotelsLoc).should('have.value', 'Hotel Hervey');
    }
    RoomType(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.RoomTypeLoc).select('Deluxe')
        cy.xpath(SearchHotelFun.SearchHotelLocators.RoomTypeLoc).should('have.value', 'Deluxe')
    }
    NoOfRooms(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.NoOfRoomsLoc).select('10 - Ten')
        cy.xpath(SearchHotelFun.SearchHotelLocators.NoOfRoomsLoc).should('contain', '10 - Ten')
    }
    CheckIn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.CheckInLoc).type('10/06/2024')
        //cy.xpath(SearchHotelFun.SearchHotelLocators.CheckInLoc).should('have.value', '10/06/2024')    
    }
    CheckOut(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.CheckOutLoc).type('12/08/2024')
        //cy.xpath(SearchHotelFun.SearchHotelLocators.CheckOutLoc).should('have.value', '12/06/2024')    
    }
    AdultsRoom(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.AdultsLoc).select('4 - Four')
        cy.xpath(SearchHotelFun.SearchHotelLocators.AdultsLoc).should('contain', '4 - Four')   
    }
    ChildRoom(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.ChildrenLoc).select('1 - One')
        cy.xpath(SearchHotelFun.SearchHotelLocators.ChildrenLoc).should('contain', '1 - One')    
    }
    HotelSelectRadioBtn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.HotelSelectRadioBtn).click()
    }
    ContinueBtn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.ContinueBtn).click()
    }
    FirstName(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.FirstNameLoc).type('Awais')
    }
    LasttName(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.LastNameLoc).type('Butt')
    }
    BillingAddress(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.BillingAddressLoc).type('Islamabad')
    }
    CCno(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.CCno).type('1111222233345678')
        
    }
    CCType(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.CCType).select('VISA')
        
    }
    ExpiryYear(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.ExpiryYear).select('2030')
        
    }
    ExpiryMonth(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.ExpiryMonth).select('June')
        //cy.xpath(SearchHotelFun.SearchHotelLocators.ExpiryMonth).should('have.value', 'June')
    }
    CVVno(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.CVVno).type('1222')
        
    }
    BookBtn(){
        cy.xpath(SearchHotelFun.SearchHotelLocators.BookBtn).click()
    }
}