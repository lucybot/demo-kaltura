KalturaClient.like.like(function(result) {
  <%-  Lucy.return("{liked: result}"); %>
}, <%- likeButton.videoID.code %>);
