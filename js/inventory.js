$(function() {
	$('.item').draggable({
		revert: "invalid",
	});

	function onDrop (event, ui) {
		place(ui.draggable, $(this));
	}
	$('.slot').each(function(index, el) {
		var def = {
			drop: onDrop
		};

		var obj = $(el);
		if (obj.data('slot-type')) {
			def.accept = '.' + obj.data('slot-type');
		}

		obj.droppable(def);
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
