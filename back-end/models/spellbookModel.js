import mongoose, { Schema } from 'mongoose';
import { Interface } from 'readline';

/**
 * Create database scheme for spells
 */
const SpellScheme = new Schema({
	spellName: String,
	spellLevel: Number,
	castingTime: Object,
	range_area: Object,
	components: Object,
	duration: Object,
	school: String,
	attack_save: String,
	damage_effect: String,
	description: String
});

export default mongoose.model('Spell', SpellScheme);
