KalturaClient.like.unlike(function(result) {
  res.json({liked: !result});
}, <%- likeButton.videoID.code %>);
