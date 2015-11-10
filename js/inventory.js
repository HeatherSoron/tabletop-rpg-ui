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

			place(ui.draggable, $(this));
		}
	});

	function place(item, slot) {
		var oldItem = slot.data('item');
		var oldSlot = item.data('slot');

		setParent(item, slot);
		if (oldItem && oldSlot) {
			setParent(oldItem, oldSlot);
		} else {
			if (oldItem) {
				oldItem.data('slot', null);
			}
			if (oldSlot) {
				oldSlot.data('item', null);
			}
		}
	}

	function setParent(item, slot) {
		item.offset(slot.offset());
		item.data('slot', slot);
		slot.data('item', item);
	}
});
