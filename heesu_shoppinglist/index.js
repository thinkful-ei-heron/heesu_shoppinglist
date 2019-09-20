'use strict'
function handleEvent(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const input = $('#shopping-list-entry').val();
        console.log(input);

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
};

function itemDelete() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest('li').remove(); 
    });
};

function itemToggle() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        let spanItem = $(this).closest('li').children('span');
        $(spanItem).toggleClass('shopping-item__checked');
    });
};

function init() {
    handleEvent();
    itemDelete();
    itemToggle();
};

$(init)
