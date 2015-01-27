KalturaClient.like.like(function(result) {
  <%-  Lucy.returnCode("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
