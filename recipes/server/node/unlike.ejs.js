KalturaClient.like.unlike(function(result) {
  <%-  Lucy.return("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
