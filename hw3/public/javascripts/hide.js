/* gavin raguindin */

function hide() {
    /*values of IDs are stored into variables */
    const notes = document.getElementById("Instructions").value;
    const quantity = document.getElementById("quantitybuttons").value;
    
    /*If the text area has "vegan" in it, a warning message will pop up*/
    if ($("#Instructions").val().indexOf('vegan') != -1) {
        alert("We apologize, but our cheesecake contains dairy")
        } else {
            /*If the chocolate is checked, stores the value of chocolate into a variable and print details of order*/
            if(document.getElementById("chocolate").checked) {
                const chocolateflavor = document.getElementById("chocolate").value;
                $("#cheesecakeform").text("Thank you! Your order has been placed. " +
                                          " Topping: " + chocolateflavor +
                                          " Quantity: " + quantity +
                                          " Notes: " + notes);
            }
            /*If the cherry is checked, stores the value of cherry into a variable and print details of order*/
            if(document.getElementById("cherry").checked) {
                const cherryflavor = document.getElementById("cherry").value;
                $("#cheesecakeform").text("Thank you! Your order has been placed. " +
                                          " Topping: " + cherryflavor +
                                          " Quantity: " + quantity +
                                          " Notes: " + notes);
            } else { /*else if plain is checked, stores the value of plain into a variable and print details of order*/
            (document.getElementById("plain").checked) 
                const plainflavor = document.getElementById("plain").value;
                $("#cheesecakeform").text("Thank you! Your order has been placed. " +
                                          " Topping: " + plainflavor +
                                          " Quantity: " + quantity +
                                          " Notes: " + notes);
        }
    }
}