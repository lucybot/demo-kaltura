KalturaClient.like.checkLikeExists(function(result) {
  res.json({liked: result});
}, <%- likeButton.videoID.code %>);
