KalturaClient.like.unlike(function(result) {
  <%-  Lucy.returnCode("{liked: result}"); %>
}, <%- Lucy.answer('likeButton', 'videoID') %>);
