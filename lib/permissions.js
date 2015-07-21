/**
 * Created by dengjing on 15/7/21.
 */
// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}