'use strict'
function handleEvent(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const input = $(this).find('#shopping-list-entry').val();
        
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${input}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>` );
        
        $('#shopping-list-entry').val('');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove(); 
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).find('span').toggleClass('.shopping-item_checked');
    });

};

$(handleEvent);
