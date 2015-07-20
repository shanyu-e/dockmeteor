/**
 * Created by dengjing on 15/7/17.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});