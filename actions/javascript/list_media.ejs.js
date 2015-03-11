function listMedia() {
  if (!KalturaClient.ks) {
    return setTimeout(listMedia, 100);
  }
  var filter = new KalturaMediaEntryFilter();
  filter.nameLike = <%- Lucy.variable('answers.nameLike') %>;
  var pager = null;
  KalturaClient.media.listAction(function(success, results) {
<%- Lucy.code.returnCode("results.objects", 4) %>
  }, filter, pager);
}
listMedia();
