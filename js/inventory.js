$(function() {
	$('.item').draggable({
		revert: "invalid",
	});

	$('td.inventory').droppable({
		drop: function(event, ui) {
			ui.draggable.addClass('in-inventory');
			ui.draggable.removeClass('in-slot');
		}
	});

	$('.slot.weapon').droppable({
		drop: function(event, ui) {
			ui.draggable.addClass('in-slot');
			ui.draggable.removeClass('in-inventory');
		}
	});
});
