KalturaClient.like.like(function(result) {
  res.json({liked: result});
}, <%- likeButton.videoID.code %>);
