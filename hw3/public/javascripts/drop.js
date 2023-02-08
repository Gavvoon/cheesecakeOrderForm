/* gavin raguindin */

/*when a month is clicked, it will appear on the hover dropdown menu*/
/*referenced: https://stackoverflow.com/questions/38744963/changing-the-text-of-a-button-when-clicking-an-attribute-in-the-dropdown-of-it*/
function drop() {
    var month = $('.hoverdropdown'),
            monthButton = month.find($('.activatemonthselection')),
            monthList = month.find($('.dropdowncontents').children());
  
        $(monthList).on('click', function(e){
            var selectedMonth = e.target;
            monthButton.text(selectedMonth.text).val(selectedMonth.text);
            });
}


