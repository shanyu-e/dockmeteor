/**
 * Created by dengjing on 15/7/17.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});