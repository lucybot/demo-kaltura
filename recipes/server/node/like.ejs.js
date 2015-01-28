KalturaClient.like.like(function(result) {
  <%-  Lucy.returnCode("{liked: result}"); %>
}, <%- Lucy.answer('likeButton', 'videoID') %>);
