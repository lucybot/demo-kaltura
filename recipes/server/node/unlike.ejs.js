KalturaClient.like.unlike(function(result) {
  <%-  Lucy.returnCode("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
