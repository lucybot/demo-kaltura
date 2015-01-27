KalturaClient.like.checkLikeExists(function(result) {
  <%-  Lucy.return("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
