$(function() {
	$('.item').draggable({
		revert: "invalid",
	});

	$('.slot').droppable({
		drop: function(event, ui) {
			if ($(this).hasClass('inventory')) {
				ui.draggable.addClass('in-inventory');
				ui.draggable.removeClass('in-slot');
			} else {
				ui.draggable.addClass('in-slot');
				ui.draggable.removeClass('in-inventory');
			}

			ui.draggable.offset($(this).offset());
			ui.draggable.data('slot', this);
		}
	});

});
