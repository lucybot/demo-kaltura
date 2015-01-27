KalturaClient.like.checkLikeExists(function(result) {
  <%-  Lucy.returnCode("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
