KalturaClient.like.checkLikeExists(function(result) {
  res.json(result);
}, <%- likeButton.videoID.code %>);
