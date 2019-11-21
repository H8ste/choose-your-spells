import spellbook from '../controllers/spellbookController';

export default (app) => {
    app.route('/spells')
        .get(spellbook.getAllSpells)
        .post(spellbook.createSpell);

    app.route('/spells/:spellId')
        .get(spellbook.getSpell)
        .put(spellbook.updateSpell)
        .delete(spellbook.deleteSpell);
};