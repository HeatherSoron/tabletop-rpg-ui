$(function() {
	$('.item').draggable({
		revert: "invalid",
	});

	$('.slot').droppable({
		drop: function(event, ui) {

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

		if (slot.hasClass('inventory')) {
			item.addClass('in-inventory');
			item.removeClass('in-slot');
		} else {
			item.addClass('in-slot');
			item.removeClass('in-inventory');
		}
	}
});
