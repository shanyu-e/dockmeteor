/**
 * Created by dengjing on 15/7/24.
 */
UI.registerHelper('pluralize', function(n, thing) {
    // fairly stupid pluralizer
    if (n === 1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});