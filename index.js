$(document).ready ( () => { 

    //add to list 
    $('#js-shopping-list-form').on('submit', function(e) {
        //prevent default form action
        e.preventDefault();

        //get the item entered into form
        var newItem = $('#shopping-list-entry').val();
     
       
        //add the new item to the <ul>
        $('.shopping-list').append('<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
       
        
        //clear text field
        $('#shopping-list-entry').val(" ");
    })


    //check list
    $(document).on('click', '.shopping-item-toggle' , function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
   
    //delete item 
    $(document).on('click', '.shopping-item-delete' , function() {
      $(this).closest('li').remove();
    });


})