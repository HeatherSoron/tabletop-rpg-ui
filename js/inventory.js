$(function() {
	$('.item').draggable({
		revert: "invalid",
	});

	$('td.inventory').droppable({
		drop: function(event, ui) {
			console.log(event, ui);
			ui.draggable.addClass('in-inventory');
		}
	});
});
