import mongoose, { Schema } from "mongoose";
import { Interface } from "readline";

/**
 * Create database scheme for spells
 */
const SpellScheme = new Schema({
    spellName: {
        type: String,
        required: "What is the spells's name?"
    },
    spellLevel: {
        type: Number,
        required: "What is the spells's level?"
    },
    castingTime: {
        type: { duration: Number, type: String }
    },
    range_area: {
        type: {
            range: {
                self: Boolean,
                required: "Is the spell's range self or not?",
                distance: String
            },
            required: "What is the spell's range?",
            area: {
                distance: Number,
                type: String,
                shape: String
            }
        },
        required: "What is the spell's range? And does it have an area?"
    },
    components: {
        type: {
            verbal: Boolean,
            required: "Is the spell verbal?",
            somantic: Boolean,
            required: "Is the spell somantic?",
            material: String
        },
        required: "What is the spell's components?"
    },
    duration: {
        type: {
            concentration: Boolean,
            required: "Is the spell a concentration spell?",
            time: {
                amount: Number,
                required: "What is the duration of the spell?",
                type: String,
                required: "Minutes, hours, seconds?"
            },
            required: "What is the spell's duration? and it's duration type?"
        },
        required: "Is this spell a concentration spell? And what is its duration?"
    },
    school: {
        type: String,
        required: "What school is this spell from?"
    },
    attack_save: {
        type: String,
        required: "What is the spell's attack type and its potential save?"
    },
    damage_effect: {
        type: String,
        required: "What type of damage does this spell do?"
    },
    description: {
        type: String,
        required: "What is this spell's description?"
    }
});

export default mongoose.model("Spell", SpellScheme);