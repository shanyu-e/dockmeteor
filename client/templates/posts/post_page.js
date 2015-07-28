/**
 * Created by dengjing on 15/7/23.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});