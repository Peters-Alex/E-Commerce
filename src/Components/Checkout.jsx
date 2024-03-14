import NavBar from "./NavBar"

export default function Checkout() {

    return(
        <section>
            <NavBar />

        <div>
            <h1> CheckOut</h1>
            
            <form> {/*button needs to go on the form so when it completed its submitted*/}
               First Name
               <input text=""></input>
               Last Name
               <input text=""></input><br></br>
               Billing Address
               <input text=""></input>
               City
               <input text=""></input>
               State
               <input text=""></input>
               Zip Code
               <input text=""></input><br></br>
               Card Holder Name
               <input text=""></input><br></br>
               Card Number
               <input text=""></input><br></br>
               Experation Data
               <input text=""></input>
               Security Code
               <input text=""></input><br></br>
               <button>Submit Payment</button>
            </form>
        </div>        
        </section>
    )
}
